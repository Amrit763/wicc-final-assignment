import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  RoomServiceService,
} from 'src/app/admin/room/roomService/room-service.service';
import { AuthService } from 'src/app/auth/auth-service/auth.service';

import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

booking:any;
allRooms:any;
topRooms:any;
normalRooms:any;
  // dataFromResolver:any;

  constructor(
    public dashboardService:ServiceService,
    private activateRoute:ActivatedRoute,
    private authService:AuthService,
    public roomService:RoomServiceService
    ) { 
      this.allRooms = [];
      this.topRooms = [];
      this.normalRooms = []
    }

  ngOnInit(): void {
    // console.log(this.activateRoute.snapshot.data)
    // this.dataFromResolver =this.activateRoute.snapshot.data;
    this.roomService.get()
    .subscribe(
      (data:any)=>{
        this.allRooms=data
        data.forEach((element:{categories: string;})=>{
          if(element.categories == 'normal'){
            this.normalRooms.push(element)
          }else{
            this.topRooms.push(element)
          }
        }
        )
        // console.log('top:',this.topRooms);
        // console.log('normal:',this.normalRooms);
     },(err:any)=>{
        console.log('err',err)
      })
  }
  book(obj:any){
    console.log('booking success',obj._id);
    // this.booking=obj;
    // this.dashboardService.item(obj);
    // this.dashboardService.subjectB.next(this.booking);
  }

}
