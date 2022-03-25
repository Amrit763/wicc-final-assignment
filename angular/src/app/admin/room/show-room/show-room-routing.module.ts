import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { ShowRoomComponent } from './show-room/show-room.component';

const routes: Routes = [
  {
    path:'',
    component:ShowRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoomRoutingModule { }
