import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultarPersonaComponent } from '../consultar-persona/consultar-persona.component';

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

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      documento: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]],
      secuencia: ['', [
        Validators.maxLength(3)
      ]],
      periodo: ['', [
        Validators.required
      ]],
      checkCD: false
    });
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
    console.log('asdffasd');
    this.loading = true;

    const formValue = this.myForm.value;
    this.router.navigateByUrl(`/listarCheques`);

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
