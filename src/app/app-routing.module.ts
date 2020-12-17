import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { ConsultaComponent } from './consultanfe/consulta/consulta.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path: "consulta", component:ConsultaComponent},
  {path:"cadastro", component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
