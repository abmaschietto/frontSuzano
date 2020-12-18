import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private login: LoginService,
              private routes: Router
              ) { }

  ngOnInit() {
      this.login.login(this.route.snapshot.params['user'])
      .subscribe(res=>{
        if(this.login.isLogged()){
          this.routes.navigate(['cadastro'])
        }

      })
  }

}
