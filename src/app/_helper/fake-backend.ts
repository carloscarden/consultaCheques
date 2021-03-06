﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from '../_models/user';
import { Role } from '../_models/role';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    data: any;
    constructor(public http: HttpClient) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const users: User[] = [
            {
                id: 123,
                username: 'carloscarden',
                password: '123',
                firstName: 'carlos',
                lastName: 'carden',
                role: undefined,
                rolesManejados: [Role.Admin, Role.GREMIO],
                idEntidad: 123,
                documento: '35399944',
                descDistrito: 'dd',
                numDistrito: 123,
                tipo_org: '32',
                dependencia: 'a',
                escuela: 123,
                reg: 'r1'
            },
            {
                id: 123,
                username: 'caca',
                password: '123',
                firstName: 'cnombre',
                lastName: 'cape',
                role: undefined,
                rolesManejados: [Role.GREMIO],
                idEntidad: 123,
                documento: '36399944',
                descDistrito: 'dd',
                numDistrito: 123,
                tipo_org: '32',
                dependencia: 'a',
                escuela: 123,
                reg: 'r1'
            }

        ];

        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        const roleString = isLoggedIn && authHeader.split('.')[1];
        const role = roleString ? Role[roleString] : null;

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {


            // authenticate - public
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                console.log('llegooooo!!!');
                const user = users.find(x => x.username === request.body.username && x.password === request.body.password);
                if (!user) { return error('Username or password is incorrect'); }
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    rolesManejados: user.rolesManejados,
                    token: `fake-jwt-token.${user.role}`
                });
            }

            // get user by id - admin or user (user can only access their own record)
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                if (!isLoggedIn) { return unauthorised(); }

                // get id from request url
                const urlParts = request.url.split('/');
                const id = parseInt(urlParts[urlParts.length - 1], 10);

                // only allow normal users access to their own record
                const currentUser = users.find(x => x.role === role);
                if (id !== currentUser.id && role !== Role.Admin) { return unauthorised(); }

                const user = users.find(x => x.id === id);
                return ok(user);
            }

            // get all users (admin only)
            if (request.url.endsWith('/users') && request.method === 'GET') {
                if (role !== Role.Admin) { return unauthorised(); }
                return ok(users);
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even
            // if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        // private helper functions

        function ok(body) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorised() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function error(message) {
            return throwError({ status: 400, error: { message } });
        }


        function load(): any {
            if (this.data) {
                return of(this.data);
            } else {
                return this.http
                    .get('assets/data/data.json');
            }
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
