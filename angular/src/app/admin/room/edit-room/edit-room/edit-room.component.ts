import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';

import { RoomServiceService } from '../../roomService/room-service.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  address:any;
  price:any;
  numberOfRoom:any;
  description:any;
  car:any;
  bike:any;
  categories:any;
  image:any;
  room:any;

  roomForm = new FormGroup({
  
    address: new FormControl(''),
    price: new FormControl('',),
    numberOfRoom: new FormControl(''),
    description: new FormControl(''),
    car: new FormControl(''),
    bike: new FormControl(''),
    categories: new FormControl(''),
    image: new FormControl('')
    
  })
  constructor(
    public roomService:RoomServiceService,
    public activatedRoute:ActivatedRoute,
    public msgService:MsgServiceService,
    public router:Router
  ) { 
    this.room={
      address:'',
      // price:'',
      // numberOfRoom:'',
      // description:'',
      // car:'',
      // bike:'',
      // categories:''
    }
    console.log('room >>',this.room)
  }

  ngOnInit(): void {
    const roomId=this.activatedRoute.snapshot.params["id"];
    console.log('room id aayo ngOnInit ma> ',roomId)
    this.roomService.getById(roomId)
      .subscribe((data)=>{
        console.log('data in ngOnInit',data)
        this.room=data
      },
      (err)=>{
        this.msgService.showError(err)
      })
  }
  submit(){
    console.log('this.room value',this.roomForm.value)
    this.roomService.editRoom(this.room._id,this.roomForm.value)
    .subscribe((data)=>{
      this.msgService.showSuccess('Room updated successfully')
      this.router.navigate(['/admin/show-room'])
    },
    (err)=>{
      this.msgService.showError(err);
      console.log('here error in room update>>',err)
    })
  }
  get roomFormControl(){
    return this.roomForm.controls;
  }
}
