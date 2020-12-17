import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ConsultanfeModule { }
