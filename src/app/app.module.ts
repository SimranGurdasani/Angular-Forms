import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupFormComponent } from './template-driven/signup-form/signup-form.component';
import { LoginFormComponent } from './template-driven/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveModule } from './reactive/reactive.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateDrivenModule,
    NgbModule,
    NgbModule,
    ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
