import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcardsPage } from './ecards';
import { ChartsModule } from 'ng2-charts/charts/charts';
// import '../../../../../node_modules/chart.js/dist/Chart.bundle.min.js';

@NgModule({
  declarations: [
    EcardsPage,
  ],
  imports: [
    IonicPageModule.forChild(EcardsPage),
    ChartsModule
  ],
  exports: [
    EcardsPage
  ]
})
export class EcardsPageModule { }
