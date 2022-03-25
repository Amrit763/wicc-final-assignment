import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHeaderRoutingModule } from './user-header-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';


@NgModule({
  declarations: [
    UserHeaderComponent
  ],
  imports: [
    CommonModule,
    UserHeaderRoutingModule
  ]
})
export class UserHeaderModule { }
