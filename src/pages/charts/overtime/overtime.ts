import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMenu } from "../../../shared/interfaces";

@IonicPage()
@Component({
  selector: 'page-overtime',
  templateUrl: 'overtime.html',
})
export class OvertimePage {

  item: IMenu;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OvertimePage');
  }

}
