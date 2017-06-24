import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyInfoPage } from './my-info';

@NgModule({
  declarations: [
    MyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MyInfoPage)
  ],
  exports: [
    MyInfoPage
  ]
})
export class MyInfoPageModule {}
