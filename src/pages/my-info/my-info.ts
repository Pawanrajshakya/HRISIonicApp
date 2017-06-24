import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { UserService } from "../../services/userService";
import { StaffService } from "../../services/staffService";
import { ToastService } from "../../services/sharedServices/toastService";

@IonicPage()
@Component({
  selector: 'page-my-info',
  templateUrl: 'my-info.html',
})
export class MyInfoPage {

  userInfo: any = {};
  staffInfo: any = {};

  constructor(private toastService: ToastService, private userService: UserService, private staffService: StaffService, private loadingController: LoadingController) { }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: `Please wait ...`,
      spinner: 'circles'//dots'
    });

    loader.present().then(() => {
      this.userService.getUserInfo().subscribe((data) => {
        this.userInfo = data.data;
        this.staffService.getStaff(this.userInfo.ein).then(data => {
          this.staffInfo = data.data;
          loader.dismiss(true);
        }).catch(error => {
          this.toastService.present(error.message);
          loader.dismiss(true);
        });
      }, (error) => {
        this.toastService.present(error.message);
        loader.dismiss(true);
      })
    });

  }

}
