import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../../shared/interfaces/LoginRequest';


@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})

export class LoginModalComponent {
  @Output() status = new EventEmitter<boolean>();
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


  onLogin():void{
    if(this.validateInput()) return;

    this.validateCredentials(this.loginForm.value as LoginRequest)
  }

  validateInput(status = this.loginForm.invalid):boolean{
    this.inputError = status;

    if(status){
      this.loginForm.markAllAsTouched();
    }

    return this.inputError;
  }

  validateCredentials(request : LoginRequest):void{
    if(request.username == 'Admin' && request.password == "adminpass"){
      this.closeLogin();
    }
    else{
      this.validateInput(true);
    }
  }

  closeLogin(){
    this.loginForm.reset();
    this.inputError = false;
    this.status.emit(true);
  }
}
