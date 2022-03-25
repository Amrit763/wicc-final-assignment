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

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';
import { SpinnerService } from 'src/app/shared/spineer/spinner.service';
import {
  ServiceService,
} from 'src/app/users/dashboard/service/service.service';

import { AuthService } from '../../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  loginForm = new FormGroup(
    {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
})
  constructor(
    public router: Router,
    private authService : AuthService,
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
     this.authService.login(this.loginForm.value)
        .subscribe(
          (data:any)=>{
            console.log('data aayo:',data)
            this.msgService.showSuccess('Login successful ')
            this.authService.saveToken(data.token)
            localStorage.setItem('token',data.token)
            // console.log('login matoken >> ',data.token)
            localStorage.setItem('user',JSON.stringify(data.user))
            this.router.navigate(['/users/dashboard'])

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


// login(){
//   this.spin$.showSpinner()
  
//   this.authService.login(this.loginForm.value)
//     .subscribe(
//       (data: any)=>{
//         console.log('data in login >>>',data);


//         this.msgService.showError('Login Successful');
//         localStorage.setItem('token',data.token)
//         localStorage.setItem('user',JSON.stringify(data.user))
//         this.router.navigate(['/users/dashboard'])

//       }
    
//       ,
//       (err:any)=>{
//         console.log('error aayo ',err)
//         this.msgService.showError(err)
//       }  )
  
  
//   }