import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, LoadingController, Content } from 'ionic-angular';
import { ChartService } from "../../../services/chartservice";
import { IMenu } from "../../../shared/interfaces";
import { MessageService } from "../../../services/sharedServices/messageService";

@IonicPage()
@Component({
  selector: 'page-ecards',
  templateUrl: 'ecards.html',
})
export class EcardsPage {

  @ViewChild(Content) ecardContent: Content;


  data: any[];
  chartType: string = "bar";
  chartColors: any[];
  styleExp = "0px";
  item: IMenu;

  constructor(
    public navParams: NavParams,
    public loadingController: LoadingController,
    private messageService: MessageService,
    private chartService: ChartService) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    this.styleExp = this.ecardContent.contentHeight + "px"
    this.chartColors = this.chartService.getBarChartColor();
    this.getChart();
  }

  getChart() {
    let loader = this.loadingController.create({
      content: 'please wait ... ',
      spinner: 'bubbles'
    });

    loader.present().then(() => {
      this.chartService.getEcardChart().then(_data => {
        this.data = _data;
        loader.dismiss();
      }).catch(error => {
        this.messageService.toast(error);
        loader.dismiss();
      })
    });
  }
}
