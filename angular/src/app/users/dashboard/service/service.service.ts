import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
room:any;

constructor(private http:HttpClient) {
  
}
get(){
  //  const header={
    //    'Content-Type':'application/json',
    //    'Access-Control-Allow-Headers':'Content-Type',
    //    'token':"angular token"
    //  }
    //  const requestOption={
      //    headers: new HttpHeaders(header)
      //  }
      // return this.http.get('https://jsonplaceholder.typicode.com/todos/1',requestOption)
      return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      
    }
    item(obj:any){
      this.room=obj;
      console.log('item in service is ',obj)
    }
    // subjectB = new BehaviorSubject<string>('room')
}
