import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MsgServiceService } from './service/msg-service.service';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
    // MsgServiceService
  ],
  providers:[MsgServiceService],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
    // MsgServiceService
  ]
})
export class SharedModule { }
