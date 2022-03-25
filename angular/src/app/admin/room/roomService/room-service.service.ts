import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  url:string;
  constructor(public http:HttpClient) { 
    this.url=environment.Base_URL+'room';
  }
  getOptions(){
    return{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }
  addRoom(data:any){
    return this.http.post(`${this.url}`,data,this.getOptions())
  }
  get() {
    return this.http.get(`${this.url}`, this.getOptions())
  }
  remove(id: string) {
    return this.http.delete(`${this.url}/${id}`, this.getOptions())
  }
  getById(id:string){
    return this.http.get(`${this.url}/${id}`,this.getOptions())
  }
  editRoom(id:string,data:any){
    return this.http.put(`${this.url}/${id}`,data,this.getOptions())
  }

  getRoomByCategory(){
    return this.http.get(`${this.url}`,this.getOptions())
  }
}
