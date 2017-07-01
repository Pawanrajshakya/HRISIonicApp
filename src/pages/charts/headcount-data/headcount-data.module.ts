import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadcountDataPage } from './headcount-data';

@NgModule({
  declarations: [
    HeadcountDataPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadcountDataPage),
  ],
  exports: [
    HeadcountDataPage
  ]
})
export class HeadcountDataPageModule {}
