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

import { AdminServiceService } from '../../adminService/admin-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
// userId:any;
email:any;
name:any;
password:any;
username:any;
phoneNumber:any;
updatedId:any;
user:any;

registerForm = new FormGroup(
  {
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
    phoneNumber: new FormControl(''),

})
  constructor(
    public adminService:AdminServiceService,
    public activatedRoute:ActivatedRoute,
    public msgService:MsgServiceService,
    public router:Router
    ) {
    // this.user=new User({})
    this.user={
      name:'',
      email:'',
      password:'',
      phoneNumber:'',
      username:''
    }
    console.log('this',this.user)
   }

  ngOnInit(): void {
    const userId=this.activatedRoute.snapshot.params["id"];
    console.log('user id aayo ',userId)
   this.adminService.getById(userId)
   .subscribe((data)=>{
     console.log('data',data)
     this.user=data
   },
   (err)=>{
     console.log('err')
   })
  }

  update(){
    this.adminService.editUserService(this.user._id,this.registerForm.value)
    .subscribe((data)=>{
      this.msgService.showSuccess('Updated successfully');
      this.router.navigate(['/admin/customer']);
    })
  }

  get registerFormControl(){
    return this.registerForm.controls;
    }

}
