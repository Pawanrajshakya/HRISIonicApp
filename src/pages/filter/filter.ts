import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { IMenu } from "../../shared/interfaces";

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  menu: IMenu = { title: "", description: "", component: "", icon: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.menu = this.navParams.data;
  }

  openRC() {
    this.openModal("RcPage");
  }

  openDP() {
    this.openModal("DpPage");
  }

  openModal(page: string) {
    let modal = this.modalCtrl.create(page);
    modal.onDidDismiss(() => { });
    modal.present();
  }

  // openDPs() {
  //   let modal = this.modalCtrl.create(DpPage);
  //   modal.present();
  // }

  // openTitles() {
  //   let modal = this.modalCtrl.create(TitlesPage);
  //   modal.present();
  // }

  // openLocations() {
  //   let modal = this.modalCtrl.create(LocationsPage);
  //   modal.present();
  // }
}
