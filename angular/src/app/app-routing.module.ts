import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'auth/dashboard',
    pathMatch:'full'
  },
  {
    path:'auth',
    // canLoad:[LoadGuard],

    loadChildren: ()=> import('./auth/auth.module').then(m =>
      m.AuthModule)
  },
  {
    path:'shared',
    loadChildren:()=> import('./shared/shared.module').then(m=>
      m.SharedModule)
  },
  {
    path:'users',
    loadChildren:()=> import('./users/users.module').then(m=>
      m.UsersModule)
  },
  {
    path:'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m=>
      m.AdminModule)
  },
  {
    path:'**',
    loadChildren:()=>import('./shared/page-not-found/page-not-found.module').then(m=>
      m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
