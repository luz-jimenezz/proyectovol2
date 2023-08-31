import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
//SERVICIOS
import { AuthService } from './sevices/auth.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers:[AuthService]//proverdor -->servicio
})
export class AuthModule { }
