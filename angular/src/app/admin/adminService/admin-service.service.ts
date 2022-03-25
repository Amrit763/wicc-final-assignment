import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  url:string;
  constructor(public http:HttpClient) { 
    this.url=environment.Base_URL+'user';
  }
  getOptions() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'token':localStorage.getItem('token')!
        })
    }
  }
  deleteUserSer(user:any){
    console.log('dlt id>>>',user._id)
    return this.http.delete(this.url+'/'+user._id,this.getOptions())
  }
  getAllUSer(){
    return this.http.get(`${this.url}`,this.getOptions())
  }
  editUserService(id:string,data:any){
    return this.http.put(`${this.url}/${id}`,data,this.getOptions())
  }
  getById(id: string) {
    return this.http.get(`${this.url}/${id}`, this.getOptions());
}

saveToken(token: string){
  console.log('token aayo',token)
  localStorage.setItem('token',token);
}
validAdmin(){
  let token = localStorage.getItem('token');
  if(token){
    return true;
  }else{
    return false
  }
}
}