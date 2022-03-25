import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string;
  constructor(public http: HttpClient) { 
    this.url=environment.Base_URL;
  }

  saveToken(token: string){
    console.log('token aayo',token)
    localStorage.setItem('token',token);
  }
  removeToken(){
    localStorage.removeItem('token')
  }
  checkToken(){
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }

  getOptions() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
  }

  register(data:any){
    return this.http.post(this.url+'auth/register',data,this.getOptions())
  }
  login(data:any){
    return this.http.post(this.url+'auth/login',data,this.getOptions())
  }
  customerData(){
    return this.http.get(this.url+'user',this.getOptions())
  }

}
