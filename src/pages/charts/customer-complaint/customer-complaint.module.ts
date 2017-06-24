import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerComplaintPage } from './customer-complaint';

@NgModule({
  declarations: [
    CustomerComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerComplaintPage),
  ],
  exports: [
    CustomerComplaintPage
  ]
})
export class CustomerComplaintPageModule {}
