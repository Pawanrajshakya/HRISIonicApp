import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerComplaintDataPage } from './customer-complaint-data';

@NgModule({
  declarations: [
    CustomerComplaintDataPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerComplaintDataPage),
  ],
  exports: [
    CustomerComplaintDataPage
  ]
})
export class CustomerComplaintDataPageModule {}
