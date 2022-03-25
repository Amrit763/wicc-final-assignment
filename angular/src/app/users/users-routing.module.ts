import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DashboardResolver } from './resolver/dashboard.resolver';
import { UsersGuard } from './user-guard/users.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    canActivate:[UsersGuard],
    component:UsersComponent,
    // children:[
    //   // {
    //   //   path:'dashboard',loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>
    //   //     m.DashboardModule)
    //   // },
    //   {
    //     path:'user-footer',loadChildren: ()=>import('./user-footer/user-footer.module').then(m=>
    //       m.UserFooterModule)
    //   },
    //   {
    //     path:'user-header',loadChildren: ()=>import('./user-header/user-header.module').then(m=>
    //       m.UserHeaderModule)
    //   }
    // ]
    children:[
      {
              path:'dashboard',
              resolve: {
                data:DashboardResolver
              },
              loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>
                m.DashboardModule)
            
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
