import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { EditCustomerRoutingModule } from './edit-customer-routing.module';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    EditCustomerRoutingModule,
    SharedModule
  ]
})
export class EditCustomerModule { }
