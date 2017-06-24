import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { NotePage } from "../note/note";

@NgModule({
  declarations: [
    HomePage,
    NotePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage,
    NotePage
  ]
})
export class HomePageModule { }
