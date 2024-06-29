import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form/template-driven-form.component';
// import { SignupFormComponent } from './template-driven/signup-form/signup-form.component';
// import { LoginFormComponent } from './template-driven/login-form/login-form.component';
import { ReactiveFormsComponent } from './reactive/reactive-forms/reactive-forms.component';
import { SignupFormComponent } from './reactive/signup-form/signup-form.component';
import { LoginFormComponent } from './reactive/login-form/login-form.component';

const routes: Routes = [
  {
    path:'reactive-signup',
    component:SignupFormComponent
  },
  {
    path:'reactive-login',
    component:LoginFormComponent
  },
  {
    path:'template-driven',
    component:TemplateDrivenFormComponent
  },
  {
    path:'reactive-forms',
    component:ReactiveFormsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
