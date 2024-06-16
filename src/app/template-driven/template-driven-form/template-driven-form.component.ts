import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  // defaultSelectedValue="CMPN"

  form = {
    'username':'',
    'email':'',
    'gender':'',
    'address':'',
    'branch':'CMPN'
  }

  submitForm(){
    // if it is one way data binding [ngModel] this defaultSelectedValue did not change but when we did two way data binding,this value changes to what we selected
    // console.log(this.defaultSelectedValue)
    // console.log(registerForm)
    console.log(this.form)
  }

  // if i want to give defaultValues i will use banana in a box
  

}
