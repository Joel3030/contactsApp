import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ErrorMessageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ErrorMessageComponent, NavbarComponent]
})
export class SharedModule { }
