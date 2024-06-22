import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    //import both below modules for reactive forms
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsComponent,
    
  ]
})
export class ReactiveModule { }
