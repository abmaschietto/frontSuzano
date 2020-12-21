import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DirectivesModule,
    FontAwesomeModule
  ]
})
export class ConsultanfeModule { }
