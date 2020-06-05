import { Component, OnInit } from '@angular/core';

export interface Personas {
  apYnom: string;
  documento: string;

}

const ELEMENT_DATA: Personas[] = [
  {
    documento: 'a', apYnom: 'a',
  },

  { apYnom: 'Helium', documento: 'b' },

  { apYnom: 'Lithium', documento: 'c' },


];

@Component({
  selector: 'app-listar-cambio-doc',
  templateUrl: './listar-cambio-doc.component.html',
  styleUrls: ['./listar-cambio-doc.component.scss']
})
export class ListarCambioDocComponent implements OnInit {
  displayedColumns: string[] =
    ['apYnom', 'documento'];

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  openDialog() { }

}
