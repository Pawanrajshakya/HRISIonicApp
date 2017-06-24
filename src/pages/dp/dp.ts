import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastService } from "../../services/sharedServices/toastService";
import { CodeService } from "../../services/codeService";

@IonicPage()
@Component({
  selector: 'page-dp',
  templateUrl: 'dp.html',
})
export class DpPage {

  codes: any[] = [];
  selected: any[] = [];

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public viewCtrl: ViewController
    , private codeService: CodeService
    , private toastService: ToastService) {
  }

  ionViewDidLoad() {
    this.get();
  }

  get() {
    this.codeService.getDP().then(
      data => {
        this.codes = data;
        this.codeService.getSelectedDP().then(data => {
          this.selected = data;
        }).catch(error => {
          this.toastService.present(error.message);
        });
      }).catch(error => {
        this.toastService.present(error.message);
      });
  }

  onSelect(value: string): void {
    try {
      let i = this.selected.indexOf(value);
      (i !== -1) ? this.selected.splice(i, 1) : this.selected.push(value);
      this.codeService.setSelectedDP(this.selected);
    } catch (error) {
      this.toastService.present(error, "bottom");
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
