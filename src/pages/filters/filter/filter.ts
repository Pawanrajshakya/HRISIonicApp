import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { IMenu } from "../../../shared/interfaces";

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  menu: IMenu;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.menu = this.navParams.data;
  }

  getRCs() {
    this.showModal("RcPage");
  }

  getDPs() {
    this.showModal("DpPage");
  }

  showModal(page: string) {
    let modal = this.modalCtrl.create(page);
    modal.onDidDismiss(() => { });
    modal.present();
  }

  showReport(){
    this.navCtrl.push(this.menu.component, this.menu);
  }
}
