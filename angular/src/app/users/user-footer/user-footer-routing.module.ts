import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { UserFooterComponent } from './user-footer/user-footer.component';

const routes: Routes = [
  {
    path:'',
    component:UserFooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFooterRoutingModule { }
