import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  UserFooterComponent,
} from './user-footer/user-footer/user-footer.component';
import {
  UserHeaderComponent,
} from './user-header/user-header/user-header.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserHeaderComponent,
    UserFooterComponent
    // DashboardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
