import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public aviaoIcone = faPaperPlane;
  public formCadastro: FormGroup;
  public toggler:string = 'hidden';

  constructor(private builder: FormBuilder,
              private notification: NotificationService) { }


  ngOnInit() {
    this.formCadastro = this.builder.group({
      notas:[null, Validators.required]
    })
  }

  send(){
    // MOCKAP ATÉ A API ESTAR PRONTA
    console.log(this.formCadastro.value);
    this.notification.notify('Conteúdo gravado!')

  }

}
