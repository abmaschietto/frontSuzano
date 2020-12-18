import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearchPlus, faPlus, faUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private login: LoginService,
              private router: Router) { }

  // icons font awesome
  search =  faSearchPlus;
  plus =  faPlus
  user = faUser
  signout = faSignOutAlt;

  ngOnInit() {
  }

  logged():string{
   return this.login.getUser();
  }

  out(){
    this.login.logout();
    this.router.navigate(['']);
  }

}



