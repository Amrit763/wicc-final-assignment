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

import { AuthService } from 'src/app/auth/auth-service/auth.service';
import { MsgServiceService } from 'src/app/shared/service/msg-service.service';
import { SpinnerService } from 'src/app/shared/spineer/spinner.service';
import {
  ServiceService,
} from 'src/app/users/dashboard/service/service.service';

import { AdminServiceService } from '../../adminService/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  user:any;
  loginForm = new FormGroup(
    {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
})
  constructor(
    public router:Router,
    private authService : AuthService,
    public adminService:AdminServiceService,
    public msgService:MsgServiceService,
    public spin$: SpinnerService,
    public dasService:ServiceService
  ) { }

  ngOnInit(): void {
  }
  login(){
    // this.dasService.get()
    this.spin$.showSpinner()
    if(this.loginForm.valid){
      this.user = this.loginForm.value
      // console.log('here admin ',this.user)
      this.authService.login(this.loginForm.value)
        .subscribe(
          (data:any)=>{
            if(data.user.role=="admin"){
              this.adminService.saveToken(data.token)
              // localStorage.setItem('user',JSON.stringify(data.user))
              localStorage.setItem('token',data.token)
              this.router.navigate(['/admin/admin-navbar'])
              this.msgService.showSuccess('Admin login successful ')
            }else{
              this.msgService.showError('You are not admin')
            }
          },
          (err)=>{
            this.msgService.showError(err.error.message)
          },
      
        )



    }else{
      console.log('invalid')
    }
  }
  get loginFormControl(){
    return this.loginForm.controls;
    }

}
