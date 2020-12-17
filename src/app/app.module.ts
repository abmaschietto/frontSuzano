import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultanfeModule } from './consultanfe/consultanfe.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroModule } from './cadastro/cadastro.module';
import { DirectivesModule } from './directives/directives.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConsultanfeModule,
    CadastroModule,
    FontAwesomeModule,
    DirectivesModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
