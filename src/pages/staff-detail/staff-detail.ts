import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { StaffService } from "../../services/staffService";
import { MessageService } from "../../services/sharedServices/messageService";

@IonicPage()
@Component({
  selector: 'page-staff-detail',
  templateUrl: 'staff-detail.html',
})
export class StaffDetailPage {

  staffDetail: any = {};
  title: string = "Staff Detail";
  ein: string = "";
  activeTabs: string = "PMS";

  constructor(public navCtrl: NavController, public navParams: NavParams, private staffService: StaffService,
    private loadingController: LoadingController,
    private messageService: MessageService) {
    this.ein = navParams.data;
  }

  ionViewDidEnter() {
    let loader = this.loadingController.create({
      content: `Please wait ...`,
      spinner: 'circles'//dots'
    });

    loader.present().then(() => {
      this.staffService.getStaff(this.ein).then((data) => {
        this.staffDetail = data.data;
        console.log(this.staffDetail);
        loader.dismiss(true);
      }).catch((error) => {
        this.messageService.toast(error.message);
        loader.dismiss(true);
      });
    });
  }

}
