import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OvertimeDataPage } from './overtime-data';

@NgModule({
  declarations: [
    OvertimeDataPage,
  ],
  imports: [
    IonicPageModule.forChild(OvertimeDataPage),
  ],
  exports: [
    OvertimeDataPage
  ]
})
export class OvertimeDataPageModule {}
