import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth-service/auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.removeToken();
    this.router.navigate(['/auth/login'])
  }
}
