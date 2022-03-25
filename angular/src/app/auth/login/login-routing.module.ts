import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    canDeactivate:[LoginGuard],
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
