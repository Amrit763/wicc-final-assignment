import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AdminRegRoutingModule } from './admin-reg-routing.module';
import { AdminRegComponent } from './admin-reg/admin-reg.component';

@NgModule({
  declarations: [
    AdminRegComponent
  ],
  imports: [
    CommonModule,
    AdminRegRoutingModule,
    SharedModule
  ]
})
export class AdminRegModule { }
