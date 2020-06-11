import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarChequeComponent } from './consultar-cheque/consultar-cheque.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { ListarChequesComponent } from './listar-cheques/listar-cheques.component';
import { ListarCambioDocComponent } from './listar-cambio-doc/listar-cambio-doc.component';
import { RolesComponent } from './roles/roles.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent
  },
  {
    path: 'busqueda',
    component: ConsultarChequeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'busquedaPersona/:persona',
    component: ListarPersonaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listarCheques/docu/:docu/secu/:secu/anio/:anio/checkCD/:checkCD',
    component: ListarChequesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listarCambioDoc/:documento',
    component: ListarCambioDocComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
