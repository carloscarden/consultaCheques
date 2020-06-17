import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ConsultaChequeService } from '../_services/consulta-cheque.service';
import { Cheque } from '../_models/cheque';




const ELEMENT_DATA: Cheque[] = [
  {
    periodo: '2004/01',
    documento: '23175024',
    secuencia: '6',
    fechaafec: '2004/01',
    apellido: 'CORTEZ MIRIAN',
    foja: '0',
    cargo: '0',
    dep: 'OFICIAL',
    dis: 'MERLO',
    tor: 'ESCUELA PRIMARIA BASICA',
    escu: '70',
    opag: '72',
    dopag: '72 - SDOS TIT 2004 CAJ.',
    cdoc: null,
    liquido: '430.82',
    fecafec: '200401',
    nrocheq: '76729',
    fpago: null,
    cat: 'MG',
    apart: null,
    item: null
  },
  {
    periodo: '2004/01',
    documento: '23175024',
    secuencia: '6',
    fechaafec: '2004/01',
    apellido: 'CORTEZ MIRIAN',
    foja: '0',
    cargo: '0',
    dep: 'OFICIAL',
    dis: 'MERLO               ',
    tor: 'ESCUELA PRIMARIA BASICA',
    escu: '70',
    opag: '145',
    dopag: '145 - INCENTIVO DOCENTE 1ER. SEM. 4TA. CUOTA -CAJERO',
    cdoc: null,
    liquido: '62.64',
    fecafec: '200401',
    nrocheq: '579441',
    fpago: null,
    cat: 'MG',
    apart: null,
    item: null
  },
  {
    periodo: '2004/02',
    documento: '23175024',
    secuencia: '6',
    fechaafec: '2004/01',
    apellido: 'CORTEZ MIRIAN',
    foja: '0',
    cargo: '0',
    dep: 'OFICIAL',
    dis: 'MERLO               ',
    tor: 'ESCUELA PRIMARIA BASICA',
    escu: '70',
    opag: '207',
    dopag: '207 - INCENTIVO DOCENTE 1ER. SEM 5TA CUOTA CAJERO',
    cdoc: null,
    liquido: '61.84',
    fecafec: '200401',
    nrocheq: '57804',
    fpago: null,
    cat: 'MG',
    apart: null,
    item: null
  },
  {
    periodo: '2004/02',
    documento: '23175024',
    secuencia: '6',
    fechaafec: '2004/02',
    apellido: 'CORTEZ MIRIAN',
    foja: '0',
    cargo: '0',
    dep: 'OFICIAL',
    dis: 'MERLO               ',
    tor: 'ESCUELA PRIMARIA BASICA',
    escu: '70',
    opag: '223',
    dopag: '223 - SDOS TIT FEB/2004 CAJERO',
    cdoc: null,
    liquido: '472.89',
    fecafec: '200402',
    nrocheq: '56769',
    fpago: null,
    cat: 'MG',
    apart: null,
    item: null
  }
];



@Component({
  selector: 'app-listar-cheques',
  templateUrl: './listar-cheques.component.html',
  styleUrls: ['./listar-cheques.component.scss']
})
export class ListarChequesComponent implements OnInit {
  displayedColumns: string[] =

    ['periodo', 'documento', 'secuencia', 'fechaafec',
      'apellido', 'foja', 'cargo', 'dep',
      'dis', 'tor', 'escu', 'opag', 'dopag', 'cdoc',
      'liquido', 'fecafec', 'nrocheq', 'fpago',
      'cat', 'apart', 'item'];

  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Cheque>([]);
  selection = new SelectionModel<Cheque>(true, []);


  constructor(
    private consultaChequeService: ConsultaChequeService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    const docu = this.route.snapshot.paramMap.get('docu');
    const secu = this.route.snapshot.paramMap.get('secu');
    const anio = this.route.snapshot.paramMap.get('anio');
    const checkCD = this.route.snapshot.paramMap.get('checkCD');
    this.consultaChequeService.verCheques(docu, secu, anio, checkCD).subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Cheque>(data);
      },
      error => {
        this.snackBar.open('Error de conexión, vuelva a intententarlo mas tarde', 'Aceptar', {
          duration: 2000,
        });
      }
    );
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Cheque): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.dep}`;
  }


  imprimir() { }


  cancelar() {
    this.router.navigateByUrl(``);
  }
}
