import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ToastService } from "../../services/sharedServices/toastService";
import { HRISInternalData } from "../../models/code";
import { DataService } from "../../services/dataService";
import { IMenu } from "../../shared/interfaces";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any[] = [];

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public loadingController: LoadingController
    , private dataService: DataService<HRISInternalData>
    , private toastService: ToastService) { }

  getSummary() {
    let loader = this.loadingController.create({
      content: 'Getting Ready',
      spinner: 'dots'//'circles'//dots'
    });

    loader.present().then(() => {
      this.dataService.get(this.dataService.summary).then((response) => {
        this.data = response.data;
        loader.dismiss();
      }, (error) => {
        this.toastService.present("Unable to load summary.");
        loader.dismiss();
      }).catch((error) => {
        this.toastService.present(error);
        loader.dismiss();
      });
    });
  }

  ionViewDidLoad() {
    this.getSummary();
  }

  onRefresh(refresher) {
    this.dataService.summary.refresh = true;
    this.dataService.get(this.dataService.summary).then((response) => {
      this.data = response.data;
      refresher.complete();
    }).catch((error) => {
      this.toastService.present(error);
      refresher.complete();
    });
  }

  redirect(item: IMenu) {
    if (item.component.length > 0)
      this.navCtrl.push(item.component, item);
  }

}
