import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFooterRoutingModule } from './user-footer-routing.module';
import { UserFooterComponent } from './user-footer/user-footer.component';


@NgModule({
  declarations: [
    UserFooterComponent
  ],
  imports: [
    CommonModule,
    UserFooterRoutingModule
  ]
})
export class UserFooterModule { }
