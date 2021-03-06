﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.api_url}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.api_url}/users/${id}`);
    }

    verSiHuboCambios(docu: string) {
        return this.http.get<any>(`${environment.api_url}/persona/huboCambios/${docu}`);
    }

    verCambiosEnElDocumento(docu: string) {
        return this.http.get<any>(`${environment.api_url}/persona/mostrarDatosCambiados/${docu}`);
    }

    verPersonas(apeynom: string) {
        return this.http.get<any>(`${environment.api_url}/persona/obtenerPersonas/${apeynom}`);
    }




}
