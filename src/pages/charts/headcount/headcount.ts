import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Content, LoadingController } from 'ionic-angular';
import { IMenu } from "../../../shared/interfaces";
import { MessageService } from "../../../services/sharedServices/messageService";
import { ChartService } from "../../../services/chartservice";

@IonicPage()
@Component({
  selector: 'page-headcount',
  templateUrl: 'headcount.html',
})
export class HeadcountPage {

  @ViewChild(Content) hcContent: Content;

  data: any[];
  chartType: string = "line";
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
    this.styleExp = this.hcContent.contentHeight + "px"
    this.chartColors = this.chartService.getChartColors();
    this.getChart();
  }

  getChart() {

    let loader = this.loadingController.create({
      content: 'please wait ... ',
      spinner: 'bubbles'
    });

    loader.present().then(() => {
      this.chartService.getHCChart().then(_data => {
        this.data = _data;
        loader.dismiss();
      }).catch(error => {
        this.messageService.toast(error);
        loader.dismiss();
      })
    });


  }

}
