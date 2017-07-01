import { Injectable } from '@angular/core';

//import hcChartData from '../data/headcountChart';
import ccChartData from '../data/customerComplaint';
import overtimeFY from '../data/overtimeFY';
import { DataService } from "./dataService";
import { IResponse } from "../shared/interfaces";
import { UserService } from "./userService";
import { CodeService } from "./codeService";
import { HRISDataInfo } from "../models/code";

@Injectable()
export class ChartService {

    ecardData = { label: [], data: [{ data: [], label: 'E-cards' }] };
    hcData = { label: [], data: [{ data: [], label: 'E-cards', fill: false }] };

    constructor(private dataService: DataService<IResponse>, private userService: UserService, private codeService: CodeService) { }

    getEcardChart(): Promise<any> {

        return new Promise((resolve, reject) => {

            if (this.dataService.ecardChart.hasParam) {
                this.dataService.ecardChart.param = {
                    userID: this.userService.user.userID || "",
                    roleID: this.userService.user.roleID || 0,
                    rcList: this.codeService.selectedRC || [],
                    dpList: []
                };
            }
            this.dataService.get(this.dataService.ecardChart).then(data => {
                try {
                    console.log('getEcardChart', data);
                    this.ecardData.label.length = 0;
                    this.ecardData.data[0].data.length = 0;
                    data.data.forEach((value) => {
                        this.ecardData.label.push(value.labels);
                        this.ecardData.data[0].data.push(value.data);
                    })

                } catch (error) {
                    reject(error);
                }
                resolve(this.ecardData);
            }).catch(error => {
                reject(error);
            });
        });
    }

    getHCChart(): Promise<any> {
        return new Promise((resolve, reject) => {

            if (this.dataService.hcChart.hasParam) {
                this.dataService.hcChart.param = {
                    userID: this.userService.user.userID || "",
                    roleID: this.userService.user.roleID || 0,
                    rcList: this.codeService.selectedRC || [],
                    dpList: []
                };
            }

            this.dataService.get(this.dataService.hcChart).then(data => {
                try {
                    this.hcData.label.length = 0;
                    this.hcData.data[0].data.length = 0;
                    let label = [];
                    let data1 = { data: [], label: '', fill: false, lineTension: 0 };
                    let data2 = { data: [], label: '', fill: false, lineTension: 0 };
                    let data3 = { data: [], label: '', fill: false, lineTension: 0 };

                    data.data.forEach((value) => {
                        label.push(value.period);
                        data1.data.push(value.vacancy);
                        data1.label = "Vacancy";
                        data2.data.push(value.budgetedHeadcount);
                        data2.label = "Budgeted Headcount";
                        data3.data.push(value.activeStaff);
                        data3.label = "Active Staff";
                    })

                    this.hcData.data.length = 0;
                    this.hcData.label = label;
                    this.hcData.data.push(data1);
                    this.hcData.data.push(data2);
                    this.hcData.data.push(data3);
                    resolve(this.hcData);
                } catch (error) {
                    reject(error);
                }
                resolve(this.ecardData);
            }).catch(error => {
                reject(error);
            });

            // this.hcData.label.length = 0;

            resolve(this.hcData);
        });
    }

    getCCChart(): Promise<any> {

        let data = { label: [], data: [] };

        return new Promise((resolve, reject) => {

            let response = ccChartData;

            let label = [];
            let series = [];

            response.forEach((value) => {
                if (label.indexOf(value.Date) === -1)
                    label.push(value.Date)
            });

            data.label = label;

            response.forEach((value) => {
                if (series.indexOf(value.Name) === -1)
                    series.push(value.Name)
            });

            let i = 0;
            series.forEach(item => {
                var subdata = { data: [], label: '', fill: false, lineTension: 0 };
                label.forEach(val => {
                    subdata.data.push(0);
                    i++;
                });
                data.data.push(subdata);
            })

            response.forEach((value2) => {
                var row = series.indexOf(value2.Name);
                var col = label.indexOf(value2.Date);
                data.data[row].data[col] = value2.Count;
                data.data[row].label = value2.Name;
            });

            console.log('>', data);
            resolve(data);
        });
    }

    getOTFYChart(): Promise<any> {

        let data = { label: [], data: [] };

        return new Promise((resolve, reject) => {

            let response = overtimeFY;

            let label = [];
            let series = [];

            response.forEach((value) => {
                if (label.indexOf(value.dbDescription) === -1)
                    label.push(value.dbDescription)
            });

            data.label = label;

            response.forEach((value) => {
                if (series.indexOf(value.Type) === -1)
                    series.push(value.Type)
            });

            let i = 0;
            series.forEach(item => {
                var subdata = { data: [], label: '', fill: false, lineTension: 0 };
                label.forEach(val => {
                    subdata.data.push(0);
                    i++;
                });
                data.data.push(subdata);
            })

            response.forEach((value2) => {
                var row = series.indexOf(value2.Type);
                var col = label.indexOf(value2.dbDescription);
                data.data[row].data[col] = value2.dbValue;
                data.data[row].label = value2.Type;
            });

            console.log('>', data);
            resolve(data);
        });
    }

    getBarChartColor() {
        return [{
            backgroundColor: ["#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41", "#f1ab41"]
        }]
    }

    getChartColors() {
        return [{
            backgroundColor: ["#f1ab41"],
            borderColor: ["#f1ab41"]
        },
        {
            backgroundColor: ["#387ef5"],
            borderColor: ["#387ef5"]
        },
        {
            backgroundColor: ["#32db64"],
            borderColor: ["#32db64"]
        },
        {
            backgroundColor: ["#222"],
            borderColor: ["#222"]
        },
        {
            backgroundColor: ["#3c8dbc"],
            borderColor: ["#3c8dbc"]
        },
        {
            backgroundColor: ["#ff0000"],
            borderColor: ["#ff0000"]
        },
        {
            backgroundColor: ["#008000"],
            borderColor: ["#008000"]
        }]
    };

}

