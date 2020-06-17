import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarChequeComponent } from './consultar-cheque/consultar-cheque.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { ListarChequesComponent } from './listar-cheques/listar-cheques.component';
import { ListarCambioDocComponent } from './listar-cambio-doc/listar-cambio-doc.component';
import { RolesComponent } from './roles/roles.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthRolGuard } from './_guards/auth-rol.guard';
import { NoAutorizadoComponent } from './no-autorizado/no-autorizado.component';

const routes: Routes = [
  {
    path: '',
    component: NoAutorizadoComponent
  },
  {
    path: 'roles',
    component: RolesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'busqueda',
    component: ConsultarChequeComponent,
    canActivate: [AuthRolGuard]
  },
  {
    path: 'busquedaPersona/:persona',
    component: ListarPersonaComponent,
    canActivate: [AuthRolGuard]
  },
  {
    path: 'listarCheques/docu/:docu/secu/:secu/anio/:anio/checkCD/:checkCD',
    component: ListarChequesComponent,
    canActivate: [AuthRolGuard]
  },
  {
    path: 'listarCambioDoc/:documento',
    component: ListarCambioDocComponent,
    canActivate: [AuthRolGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
