import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { EditRoomComponent } from './edit-room/edit-room.component';

const routes: Routes = [
  {
    path:'rm/:id',
    component:EditRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoomRoutingModule { }
