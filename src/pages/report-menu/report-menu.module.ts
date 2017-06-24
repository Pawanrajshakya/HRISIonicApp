import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportMenuPage } from './report-menu';

@NgModule({
  declarations: [
    ReportMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportMenuPage),
  ],
  exports: [
    ReportMenuPage
  ]
})
export class ReportMenuPageModule {}
