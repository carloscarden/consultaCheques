import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';





import { AppComponent } from './app.component';
import { ConsultarChequeComponent } from './consultar-cheque/consultar-cheque.component';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';
import { ListarChequesComponent } from './listar-cheques/listar-cheques.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { ListarCambioDocComponent } from './listar-cambio-doc/listar-cambio-doc.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { RolesComponent } from './roles/roles.component';
import { CommonModule } from '@angular/common/src/common_module';
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { fakeBackendProvider } from './_helper/fake-backend';
import { NoAutorizadoComponent } from './no-autorizado/no-autorizado.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultarChequeComponent,
    ConsultarPersonaComponent,
    ListarChequesComponent,
    ListarPersonaComponent,
    ListarCambioDocComponent,
    DatosPersonalesComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    RolesComponent,
    NoAutorizadoComponent
  ],
  entryComponents: [
    ConsultarPersonaComponent, ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
