import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../_services';



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

  dataSource = new MatTableDataSource<Personas>(ELEMENT_DATA);
  selection = new SelectionModel<Personas>(false, []);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    const documentoAbuscar = this.route.snapshot.paramMap.get('documento');
    this.userService.verCambiosEnElDocumento(documentoAbuscar).subscribe(
      (data) => {
        console.log('data', data);
      },
      error => {

      }
    );
  }

  openDialog() { }

}
