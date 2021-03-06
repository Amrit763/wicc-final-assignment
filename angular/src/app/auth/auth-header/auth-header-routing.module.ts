import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AuthHeaderComponent } from './auth-header.component';

const routes: Routes = [
  {
    path:'',
    component:AuthHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthHeaderRoutingModule { }
