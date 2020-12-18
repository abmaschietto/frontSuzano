import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient,
              private notification: NotificationService) {}

  login(user: string): Observable<any> {
    return this.http.get(`${environment.api}/login/${user}`).pipe(
      tap((res) => {
        if (res.resposta === "Usuário ok") {
          window.sessionStorage.setItem("user", res.usuario);
          this.notification.notify(`Bem vindo ${res.usuario}!`)
        }
      })
    );
  }
  isLogged():boolean {
    return !!window.sessionStorage.getItem('user');
  }

  logout(){
    window.sessionStorage.removeItem('user');
  }

  getUser():string{
    return window.sessionStorage.getItem('user');
  }
}
