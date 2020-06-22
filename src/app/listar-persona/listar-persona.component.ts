import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../_services';
import { Pers } from '../_models/pers';





@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.scss']
})
export class ListarPersonaComponent implements OnInit {
  displayedColumns: string[] =  
  ['documento', 'apellido', 'descDistrito',
  'numDistrito', 'tipo_org', 'dependencia',
  'escuela', 'reg'];
  dataSource = new MatTableDataSource<Pers>([]);
  selection = new SelectionModel<Pers>(false, []);
  personaAbuscar;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.personaAbuscar = this.route.snapshot.paramMap.get('persona');
    this.userService.verPersonas(this.personaAbuscar).subscribe(
      (data) => {
        console.log(data);
        this.dataSource = new MatTableDataSource<Pers>(data);

      },
      error => {
        this.snackBar.open('Error de conexión, vuelva a intententarlo mas tarde', 'Aceptar', {
          duration: 2000,
        });

      }
    );
  }



  cancelar() {
    this.router.navigateByUrl(`/busqueda`);
  }


  buscarPersona() {
    console.log(this.selection.selected);

  }

}
