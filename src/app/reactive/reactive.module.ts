import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    ReactiveFormsComponent,
    SignupFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    //import both below modules for reactive forms
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsComponent,
    LoginFormComponent,
    SignupFormComponent
  ]
})
export class ReactiveModule { }
