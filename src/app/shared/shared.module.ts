import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { SizeDirective } from '../directives/size.directive';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SnackbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    DirectivesModule
  ],
  exports:[FooterComponent, HeaderComponent, SnackbarComponent]
})
export class SharedModule { }
