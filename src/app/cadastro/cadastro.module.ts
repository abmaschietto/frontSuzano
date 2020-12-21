import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../directives/directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule,
    ReactiveFormsModule,
    SharedModule,
    ServicesModule
  ]
})
export class CadastroModule { }
