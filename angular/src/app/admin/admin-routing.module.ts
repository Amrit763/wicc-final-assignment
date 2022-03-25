import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'admin-login',
    pathMatch:'full'
  },
  {
    path:'',
    component:AdminComponent,
    // canActivate:[AdminGuard],
    children: [
      {
        path:'admin-navbar',loadChildren:()=>import('./admin-navbar/admin-navbar.module').then(m=>
      m.AdminNavbarModule)
    },
    {
      path:'customer',loadChildren:()=>import('./customer/customer.module').then(m=>
        m.CustomerModule)
    },
    {
      path:'room',loadChildren:()=>import('./room/add-room/add-room.module').then(m=>
        m.AddRoomModule)
    },
    {
      path:'edit',loadChildren:()=>import('./edit-customer/edit-customer.module').then(m=>
        m.EditCustomerModule)
    },
    {
      path:'show-room',loadChildren:()=>import('./room/show-room/show-room.module').then(m=>
        m.ShowRoomModule)
    },
    {
      path:'edit-room',loadChildren:()=>import('./room/edit-room/edit-room.module').then(m=>
        m.EditRoomModule)
    },
    {
      path:'admin-login',loadChildren:()=>import('./admin-login/admin-login.module').then(m=>
        m.AdminLoginModule)
    },
    {
      path:'booking',loadChildren:()=>import('./room/booking/booking.module').then(m=>
        m.BookingModule)
    }
    ]
 },
//  {
//   path:'admin-login',
//   // canActivate:[AdminGuard],
//   loadChildren: ()=> import('./admin-login/admin-login.module').then(m=>
//     m.AdminLoginModule)
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
