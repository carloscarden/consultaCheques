import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  sec: string;
  periodo: number;
  fechaAfec: number;
  foja: string;
  cargo:string;
  ordenDePago:string;
  fechaPago: string;
  liquido: string;
  dep: string;
  distrito: string;
  tipoOrg: string;
  esc:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {periodo: 1, sec: 'Hydrogen', fechaAfec: 1.0079, foja: 'H', 
  cargo:'a',  ordenDePago:'a', fechaPago:'b', liquido:'c', 
  dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 2, sec: 'Helium', fechaAfec: 4.0026, foja: 'He', 
  cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
  dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 3, sec: 'Lithium', fechaAfec: 6.941, foja: 'Li', 
  cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
  dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 4, sec: 'Beryllium', fechaAfec: 9.0122, foja: 'Be', 
  cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
  dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 5, sec: 'Boron', fechaAfec: 10.811, foja: 'B', 
  cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
  dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 6, sec: 'Carbon', fechaAfec: 12.0107, foja: 'C', 
  cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
  dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 7, sec: 'Nitrogen', fechaAfec: 14.0067, foja: 'N', 
  cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
  dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 8, sec: 'Oxygen', fechaAfec: 15.9994, foja: 'O', 
  cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
  dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 9, sec: 'Fluorine', fechaAfec: 18.9984, foja: 'F',
   cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
   dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},

  {periodo: 10, sec: 'Neon', fechaAfec: 20.1797, foja: 'Ne',
   cargo:'a', ordenDePago: 'b', fechaPago:'b', liquido:'c', 
   dep: 'd', distrito:'e', tipoOrg:'f', esc:'g'},
];



@Component({
  selector: 'app-listar-cheques',
  templateUrl: './listar-cheques.component.html',
  styleUrls: ['./listar-cheques.component.scss']
})
export class ListarChequesComponent implements OnInit {
  displayedColumns: string[] =
    ['sec', 'periodo', 'fechaAfec', 'foja',
      'cargo', 'ordenDePago', 'fechaPago', 'liquido',
      'dep', 'distrito', 'tipoOrg', 'esc'];

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
