import {
  Component,
  OnInit,
} from '@angular/core';

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';

import { RoomServiceService } from '../../roomService/room-service.service';

@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.css']
})
export class ShowRoomComponent implements OnInit {
allRooms:any;
topRooms :any;
normalRooms:any;
  constructor(
    public roomService:RoomServiceService,
    public msgService:MsgServiceService
  ) {
    this.allRooms = [];
    this.topRooms = [];
    this.normalRooms = []
   }

  ngOnInit(): void {
    this.roomService.get()
    .subscribe((data:any)=>{
      console.log('all rooms',data);
      this.allRooms=data
      data.forEach((element: { categories: string; }) => {
        if(element.categories == 'normal'){
          this.normalRooms.push(element)
        }else{
          this.topRooms.push(element)
        }
      }
      )
      console.log('top:',this.topRooms);
      console.log('normal:',this.normalRooms);
   },(err:any)=>{
      console.log('err',err)
    })
  }

getAllRoom(){
  this.roomService.get()
  .subscribe((data:any)=>{
    console.log('all rooms',data);
    this.allRooms=data
 },(err:any)=>{
    console.log('err',err)
  })
}

deleteRoom(obj:any){
  console.log('obj is >>>',obj._id)
  this.roomService.remove(obj._id)
  .subscribe((data)=>{
    this.msgService.showSuccess('Deleted Room');
    this.getAllRoom()
  })
}
}
