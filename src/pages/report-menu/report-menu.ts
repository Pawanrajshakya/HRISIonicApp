import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMenu } from "../../shared/interfaces";
import { MenuService } from "../../services/menuService";

@IonicPage()
@Component({
  selector: 'page-report-menu',
  templateUrl: 'report-menu.html',
})
export class ReportMenuPage {
  reportMenu: IMenu[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuService: MenuService) { }

  ionViewDidLoad() {
    this.get();
  }

  get() {
    this.reportMenu = this.menuService.getReportMenus();
  }

  redirect(item: IMenu) {
    if (item.hasFilterPage) {
      this.navCtrl.push("FilterPage", item);
    } else {
      this.navCtrl.push(item.component, item);
    }
  }
}
