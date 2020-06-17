import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ConsultarPersonaComponent } from '../consultar-persona/consultar-persona.component';

import { UserService } from '../_services/user.service';
import { LogService } from '../_services/log.service';
import { Log } from '../_models/log';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-consultar-cheque',
  templateUrl: './consultar-cheque.component.html',
  styleUrls: ['./consultar-cheque.component.scss']
})
export class ConsultarChequeComponent implements OnInit {
  myForm: FormGroup;
  animal: string;
  name: string;


  // Form state
  loading = false;
  success = false;

  years;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private userService: UserService,
    private logService: LogService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      documento: ['', [
        Validators.required,
        Validators.pattern('^[M|F|0-9][0-9]{7}')
      ]],
      secuencia: ['', [
        Validators.max(999), Validators.min(0)
      ]],
      periodo: ['', [
        Validators.required
      ]],
      checkCD: false
    });

    const now = new Date().getUTCFullYear();
    this.years = Array(now - 1990).fill('').map((v, idx) => now - idx);
  }



  get documento() {
    return this.myForm.get('documento');
  }

  get secuencia() {
    return this.myForm.get('secuencia');
  }

  get periodo() {
    return this.myForm.get('periodo');
  }

  get checkCD() {
    return this.myForm.get('checkCD');
  }


  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;
    console.log(this.myForm.value);
    const log: Log = new Log();
    log.docuConsulta = formValue.documento;
    log.ejercicioConsulta = formValue.periodo;
    log.secuConsulta = formValue.secuencia;
    this.logService.nuevaBusqueda(log).subscribe(
      data => {
        if (!formValue.checkCD) {
          this.userService.verSiHuboCambios(formValue.documento).subscribe(
            (huboCambios: any) => {
              if (huboCambios) {
                this.router.navigateByUrl(`/listarCambioDoc/${formValue.documento}`);
              } else {
                this.router.navigateByUrl
                  (`/listarCheques/docu/${formValue.documento}/secu/${formValue.secuencia}/anio/${formValue.periodo}/checkCD/${formValue.checkCD}`);
              }
            },
            error => {
              this.snackBar.open('Error de conexión, vuelva a intententarlo mas tarde', 'Aceptar', {
                duration: 2000,
              });
            }
          );
        } else {
          this.router.navigateByUrl
            (`/listarCheques/docu/${formValue.documento}/secu/${formValue.secuencia}/anio/${formValue.periodo}/checkCD/${formValue.checkCD}`);
        }

      },
      error => {
        console.log(error);
        this.snackBar.open('Error de conexión, vuelva a intententarlo mas tarde', 'Aceptar', {
          duration: 2000,
        });
      }
    );


    // this.router.navigateByUrl(`/listarCheques`);

    this.loading = false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConsultarPersonaComponent, {
      width: '500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }




}
