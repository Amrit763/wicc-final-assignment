import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

// import { AuthService } from 'src/app/auth/auth-service/auth.service';
import { MsgServiceService } from 'src/app/shared/service/msg-service.service';

import { User } from '../../../model/user.module';
import { AdminServiceService } from '../../adminService/admin-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
allUser:any;
editingUSer:any;
id:any;
updatedId:any;
empObj : User = new User('ram');
// public user:any
submitting:boolean=true;

// ...
// empDetail !: FormGroup;

  constructor(
    // ....
    // private formBuilder:FormBuilder,


    private adminServce:AdminServiceService,
    // // public authService:AuthService,
    public activatedRouter:ActivatedRoute,
    public msgService:MsgServiceService,
    public router:Router
    ) {
      this.id = this.activatedRouter.snapshot.params['id']
     }

  ngOnInit(): void {
    this.getAlluser();

    // ...
    // this.empDetail = this.formBuilder.group({
    //   name:[''],
    //   username:[''],
    //   email:[''],
    //   password:[''],
    //   phoneNumber:[''],
    // });
    
  }

  getAlluser(){
    this.adminServce.getAllUSer()
    .subscribe((data)=>{
      this.allUser=data
    })
  }
  deleteUser(obj:any){
    // console.log('here id is >>>',obj._id)
    this.adminServce.deleteUserSer(obj)
    .subscribe((data)=>{
      this.msgService.showSuccess('Deleted successfully')
      // console.log('delte>>',data)
      this.getAlluser()
    })
  }

  editUser(user:any){
    // this.submitting=false;
    this.updatedId = user;
  }
  

  
}






// editUser(user:any){
//   this.submitting=false;
//   this.updatedId = user;
//   // this.empDetail.controls['name'].setValue(user.name);
//   // this.empDetail.controls['email'].setValue(user.email)
//   // this.empDetail.controls['username'].setValue(user.username)
//   // this.empDetail.controls['phoneNumber'].setValue(user.phoneNumber)
//   // this.empDetail.controls['password'].setValue(user.password)

//   // console.log('here user id is>>',user._id)
//   // this.updatedId=user._id
//   // this.adminServce.editUserService(user._id,this.editingUSer)
//   // .subscribe((data)=>{
  //   //   this.adminServce.getAllUSer()
//   // })
// }

// update(){
//   console.log('here>>> ',this.registerForm.value)
//   // console.log('obj>>> ',obj)

//   this.submitting=true;
//   this.adminServce.editUserService(this.updatedId._id,this.registerForm.value)

//   .subscribe((data)=>{
//     this.adminServce.getAllUSer()
//   })
// }