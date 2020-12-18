import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public formConsulta: FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.formConsulta = this.builder.group({
      nfe:[null, Validators.required],
      cnpj:[null, Validators.required],
      dataInicio:[null, Validators.required],
      dataFinal:[null, Validators.required],
      armazem:[null, Validators.required]
    })
  }

  send(){
    console.log(this.formConsulta.value);

  }

}
