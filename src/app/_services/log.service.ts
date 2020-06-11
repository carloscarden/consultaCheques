import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Log } from '../_models/log';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }


  nuevaBusqueda(log: Log){
    return this.http.post<any>(`${environment.api_url}/log/crearConsulta`, log);
  }
}
