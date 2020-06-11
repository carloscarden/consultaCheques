import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConsultaChequeService {

  constructor(private http: HttpClient) { }

  verCheques(docu: string, secu: string, anio:  string , checkCd: string){
    return this.http.get<any>
    (`${environment.api_url}/cheques/obtenerCheque/documento/${docu}/secuencia/${secu}/anio/${anio}/checkCd/${checkCd}`);
  }

  imprimirCheques(cheques){
    return this.http.post<any>
    (`${environment.api_url}/cheques/obtenerChequesParaImprimir`, cheques);
  }
}
