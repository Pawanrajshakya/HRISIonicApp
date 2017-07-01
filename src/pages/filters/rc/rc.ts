import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CodeService } from "../../../services/codeService";
import { MessageService } from "../../../services/sharedServices/messageService";

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
    , private messageService: MessageService) {
  }

  ionViewDidLoad() {
    this.codes = this.codeService.rcCode;
  }

  onSelect(value: string): void {
    this.codeService.setSelectedRC(value).then(() => {

    }).catch(error => {
      this.messageService.toast(error.message);
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
