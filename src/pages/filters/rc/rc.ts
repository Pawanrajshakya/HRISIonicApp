import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CodeService } from "../../../services/codeService";
import { ToastService } from "../../../services/sharedServices/toastService";

@IonicPage()
@Component({
  selector: 'page-rc',
  templateUrl: 'rc.html',
})
export class RcPage {

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
    this.codeService.getRC().then(
      data => {
        this.codes = data;
        this.codeService.getSelectedRC().then(data => {
          this.selected = data;
        }).catch(error => {
          this.toastService.present(error.message);
        });
      }).catch(error => {
        console.log(error, 1);
        this.toastService.present(error.message);
      });
  }

  onSelect(value: string): void {
    try {
      let i = this.selected.indexOf(value);
      (i !== -1) ? this.selected.splice(i, 1) : this.selected.push(value);
      this.codeService.setSelectedRC(this.selected);
      console.log('onSelect', this.selected);
    } catch (error) {
      this.toastService.present(error, "bottom");
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
