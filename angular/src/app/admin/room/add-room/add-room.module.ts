import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AddRoomRoutingModule } from './add-room-routing.module';
import { AddRoomComponent } from './add-room/add-room.component';

@NgModule({
  declarations: [
    AddRoomComponent
  ],
  imports: [
    CommonModule,
    AddRoomRoutingModule,
    SharedModule
  ]
})
export class AddRoomModule { }
