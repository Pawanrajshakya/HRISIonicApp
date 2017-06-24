import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { UserService } from "../../services/userService";
import { ToastService } from "../../services/sharedServices/toastService";
import { NgForm } from "@angular/forms/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  lanID: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private userService: UserService
    , private toastService: ToastService
    , private viewCtrl: ViewController
    , private loadingCtrl: LoadingController) {
  }

  login(form: NgForm) {
    console.log(form);
    let loader = this.loadingCtrl.create({
      content: 'Please wait ...',
      spinner: 'dots'//'circles'//dots'
    });

    loader.present().then(() => {
      this.userService.login(form.value.lanID).subscribe((data) => {
        if (data) {
          this.viewCtrl.dismiss(data);
          loader.dismiss();
        }
      }, (error) => {
        let message: string = error.status == 404 ? "LANID Not Found" : "Internal Error!";
        this.toastService.present(message);
        loader.dismiss();
      }, () => {

      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss(false);
  }

}
