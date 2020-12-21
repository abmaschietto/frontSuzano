import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faClipboard} from '@fortawesome/free-solid-svg-icons'
import { Nota } from 'src/app/models/nota';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public prancha = faClipboard;
  public formConsulta: FormGroup;
  public notaNfe: Nota;
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
    this.notaNfe = new Nota(
    '18717182',
    '17287817278',
    'razao',
    '010',
    '31140202167325000199550000000948031039410366',
    'armazem top',
    'cnpj pao de alho',
    '21/12/2020',
    'solicitante',
    'jsantos',
    'nada'

    )
  }

}
