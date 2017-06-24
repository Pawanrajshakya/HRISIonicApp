import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportTabPage } from './report-tab';

@NgModule({
  declarations: [
    ReportTabPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportTabPage),
  ],
  exports: [
    ReportTabPage
  ]
})
export class ReportTabPageModule {}
