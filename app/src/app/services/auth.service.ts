import { Injectable, signal } from '@angular/core';
import { LoginRequest } from '../shared/interfaces/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private STORAGE_KEY = 'isLoggedIn';

  private _isLogginIn = signal(
    localStorage.getItem(this.STORAGE_KEY) === 'true'
  );

  isLogginIn =this._isLogginIn.asReadonly();

  constructor() { } 

  login(request : LoginRequest){
    if(request.username == 'Admin' && request.password == 'adminpass'){
      this.saveData();
      return true;
    }

    return false;
  }

  logout(){
    this._isLogginIn.set(false)
    localStorage.removeItem(this.STORAGE_KEY);
  }

  saveData(){
    localStorage.setItem(this.STORAGE_KEY,'true');
    this._isLogginIn.set(true);
  } 
   
   

}
