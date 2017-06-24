import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMenu } from "../../shared/interfaces";

@IonicPage()
@Component({
  selector: 'page-report-tab',
  templateUrl: 'report-tab.html',
})
export class ReportTabPage {

  private menu: IMenu;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menu = this.navParams.data;
    console.log(this.menu);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportTabPage');
  }

}
