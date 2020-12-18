import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[NotificationService, LoginService]
})
export class ServicesModule { }
