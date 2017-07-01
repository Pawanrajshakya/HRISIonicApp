import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcardsDataPage } from './ecards-data';

@NgModule({
  declarations: [
    EcardsDataPage,
  ],
  imports: [
    IonicPageModule.forChild(EcardsDataPage),
  ],
  exports: [
    EcardsDataPage
  ]
})
export class EcardsDataPageModule {}
