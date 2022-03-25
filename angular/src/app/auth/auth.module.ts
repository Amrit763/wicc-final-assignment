import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthFooterComponent } from './auth-footer/auth-footer.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    AuthFooterComponent,
    AuthHeaderComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // SharedModule,
    
  ]
})
export class AuthModule {
  constructor(){
    // console.log('this is load guard')
  }
 }
