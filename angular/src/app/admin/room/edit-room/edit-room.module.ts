import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { EditRoomRoutingModule } from './edit-room-routing.module';
import { EditRoomComponent } from './edit-room/edit-room.component';

@NgModule({
  declarations: [
    EditRoomComponent
  ],
  imports: [
    CommonModule,
    EditRoomRoutingModule,
    SharedModule
  ]
})
export class EditRoomModule { }
