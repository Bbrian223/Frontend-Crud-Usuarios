import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../../shared/interfaces/LoginRequest';
import { AuthService } from '../../../services/auth.service';


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
  
  constructor(
    private formBuider : FormBuilder,
    private auth : AuthService
    ){
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
    if(this.auth.login(request)){
      this.closeLogin();
      return;
    }
    
    this.validateInput(true);
  }

  closeLogin(){
    this.loginForm.reset();
    this.inputError = false;
    this.status.emit(true);
  }
}
