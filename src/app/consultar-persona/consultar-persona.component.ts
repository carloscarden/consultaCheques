import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.scss']
})
export class ConsultarPersonaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConsultarPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  buscar() {
    this.dialogRef.close();
    this.router.navigateByUrl(`/busquedaPersona/${this.data.name}`);
  }

}
