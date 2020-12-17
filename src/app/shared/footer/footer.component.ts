import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }


  ngOnInit()
  {
    $(document).ready(function(){
      $('.ano').html("Todos os direitos reservados &copy " + new Date().getFullYear() + " Della Volpe Transportes");
    });
  }


}
