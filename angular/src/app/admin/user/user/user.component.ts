import {
  Component,
  OnInit,
} from '@angular/core';

import { AdminServiceService } from '../../adminService/admin-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allUser:  any;
  constructor(public adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.allUser()
  }
  getUser(){
    this.adminService.getAllUSer()
    .subscribe((data)=>{
      this.allUser=data
    })
  }
}
