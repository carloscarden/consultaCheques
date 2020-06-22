import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConsultaChequeService {

  constructor(private http: HttpClient) { }

  verCheques(docu: string, secu: string, anio: number, checkCd: string) {
    console.log('llamo al servicio');
    console.log(`${environment.api_url}/cheques/obtenerCheque/documento/${docu}/secuencia/${secu}/anio/${anio}/checkCd/${checkCd}`);
    return this.http.get<any>
      (`${environment.api_url}/cheques/obtenerCheque/documento/${docu}/secuencia/${secu}/desde/${anio}/checkCd/${checkCd}`);
  }

  imprimirCheques(cheques) {
    return this.http.post
      (`${environment.api_url}/cheques/obtenerChequesParaImprimir`, cheques, { responseType: 'blob' });
  }
}
