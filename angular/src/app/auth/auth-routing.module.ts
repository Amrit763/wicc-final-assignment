import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    // redirectTo:''
    component:AuthComponent,
    canActivate:[AuthGuard],
    // canActivateChild:[ChildGuard],
    children:[
      {
        path:'login',loadChildren:()=>import('./login/login.module').then(m=>
      m.LoginModule)
    },
      {
        path:'register',loadChildren:()=>import('./register/register.module').then(m=>
          m.RegisterModule)
      },
      {
        path:'dashboard',loadChildren: ()=>import('./../users/dashboard/dashboard.module').then(m=>
          m.DashboardModule)
      },{
        path:'auth-header',loadChildren:()=>import('./auth-header/auth-header.module').then(m=>
          m.AuthHeaderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
