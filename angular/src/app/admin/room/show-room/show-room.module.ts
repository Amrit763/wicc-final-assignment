import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoomRoutingModule } from './show-room-routing.module';
import { ShowRoomComponent } from './show-room/show-room.component';


@NgModule({
  declarations: [
    ShowRoomComponent
  ],
  imports: [
    CommonModule,
    ShowRoomRoutingModule
  ]
})
export class ShowRoomModule { }
