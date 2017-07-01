import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadcountPage } from './headcount';
import { ChartsModule } from 'ng2-charts/charts/charts';

@NgModule({
  declarations: [
    HeadcountPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadcountPage),
    ChartsModule
  ],
  exports: [
    HeadcountPage
  ]
})
export class HeadcountPageModule { }
