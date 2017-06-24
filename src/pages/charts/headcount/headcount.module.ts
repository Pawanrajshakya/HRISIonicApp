import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadcountPage } from './headcount';

@NgModule({
  declarations: [
    HeadcountPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadcountPage),
  ],
  exports: [
    HeadcountPage
  ]
})
export class HeadcountPageModule {}
