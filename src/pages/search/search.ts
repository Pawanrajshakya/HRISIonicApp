import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IStaffList } from "../../shared/interfaces";
import { StaffService } from "../../services/staffService";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  staffList: IStaffList[] = [];
  unFilteredList: IStaffList[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private staffService: StaffService) {
    this.staffService.getStaffList().then((data) => {
      this.staffList = data;
      this.unFilteredList = data;
    }).catch(error => {
      console.log(error);
    })

  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.staffList = this.unFilteredList
        .filter((item) => {
          var fullname = item.firstName.toLowerCase() + item.lastName.toLowerCase();
          return (fullname.toLowerCase().indexOf(val.replace(' ', '').toLowerCase()) > -1);
        });
    } else {
      this.staffList = this.unFilteredList;
    }

  }

  showDetail(ein: string) {
    this.navCtrl.push("StaffDetailPage", ein);
  }

}
