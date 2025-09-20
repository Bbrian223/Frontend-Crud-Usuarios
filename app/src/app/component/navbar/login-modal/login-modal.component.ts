import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  inputError = false;

  loginForm = this.formBuider.group({
    username : ['',[
      Validators.required,
      Validators.nullValidator
    ]],
    password : ['',[
      Validators.required,
      Validators.nullValidator
    ]]
  })
  
  constructor(private formBuider : FormBuilder){
  }

  onLogin(){

    this.inputError = this.loginForm.invalid;

    if(this.inputError){
      this.loginForm.markAllAsTouched();
      return;
    }
    
    console.log("datos validos");

  }

  closeModal(){
    this.loginForm.reset();
    this.inputError = false
  }
}
