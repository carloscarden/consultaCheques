import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarChequeComponent } from './consultar-cheque/consultar-cheque.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarChequeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
