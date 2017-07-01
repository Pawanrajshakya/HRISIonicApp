import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMenu } from "../../../shared/interfaces";

@IonicPage()
@Component({
  selector: 'page-customer-complaint',
  templateUrl: 'customer-complaint.html',
})
export class CustomerComplaintPage {
  item: IMenu;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerComplaintPage');
  }

}
