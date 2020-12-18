import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { ConsultaComponent } from './consultanfe/consulta/consulta.component';
import { LoginComponent } from './login/login/login.component';
import { RouterguardService } from './services/routerguard.service';


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login/:user", component:LoginComponent},
  {path:"login/:user/:to", component:LoginComponent},
  {path: "consulta", component:ConsultaComponent, canActivate:[RouterguardService]},
  {path:"cadastro", component:CadastroComponent, canActivate:[RouterguardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
