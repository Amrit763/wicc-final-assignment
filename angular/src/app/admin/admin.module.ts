import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    // ShowRoomComponent,
    // AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,

  ]
})
export class AdminModule { }
