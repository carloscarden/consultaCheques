import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  dataSource = ELEMENT_DATA;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    let documentoAbuscar = this.route.snapshot.paramMap.get('documento');
    this.userService.verCambiosEnElDocumento(documentoAbuscar).subscribe(
      (data)=>{
        console.log('data', data);
      },
      error =>{

      }
    )
  }

  openDialog() { }

}
