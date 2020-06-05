import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarChequeComponent } from './consultar-cheque/consultar-cheque.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { ListarChequesComponent } from './listar-cheques/listar-cheques.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarChequeComponent
  },
  {
    path: 'busquedaPersona/:persona',
    component: ListarPersonaComponent
  },
  {
    path: 'listarCheques',
    component: ListarChequesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
