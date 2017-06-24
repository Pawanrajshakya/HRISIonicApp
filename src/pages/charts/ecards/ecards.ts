import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ChartService } from "../../../services/chartservice";

@IonicPage()
@Component({
  selector: 'page-ecards',
  templateUrl: 'ecards.html',
})
export class EcardsPage {

  data: any[];
  chartType: string = "bar";
  chartColors: any[];

  constructor(
    public loadingController: LoadingController,
    private chartService: ChartService) { }

  ionViewDidLoad() {
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
      })
    });
  }
}
