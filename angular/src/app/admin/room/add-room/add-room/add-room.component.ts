import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  RoomServiceService,
} from 'src/app/admin/room/roomService/room-service.service';
import { MsgServiceService } from 'src/app/shared/service/msg-service.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
room:any;
roomForm = new FormGroup({
  
  address: new FormControl('',[Validators.required]),
  price: new FormControl('',[Validators.required]),
  numberOfRoom: new FormControl('',[Validators.required]),
  description: new FormControl('',[Validators.required]),
  car: new FormControl(''),
  bike: new FormControl(''),
  categories: new FormControl(''),
  image: new FormControl('')
  
})

  constructor(
    public router:Router,
    private roomService:RoomServiceService,
    private msgService:MsgServiceService
  ) { }

  ngOnInit(): void {
  }
  submit(){
    this.room=this.roomForm.value;
    console.log('here>>',this.room)
    this.roomService.addRoom(this.roomForm.value)
    .subscribe(
      (data)=>{
      this.router.navigate(['/admin/show-room'])
        
        console.log('room data is>>',this.room);
        this.msgService.showSuccess('Room added successful')
      },
      (err:any)=>{
        this.msgService.showError(err)
      }
    )
  }
  // fileChanged(ev) {
  //   this.fileChanged = ev.target.files;
  // }
  get roomFormControl(){
    return this.roomForm.controls;
  }

}
