import { Injectable } from '@angular/core';
import { DataService } from "./dataService";
import { UserService } from "./userService";
import { IRCCode, IDPCode, IResponse } from "../shared/interfaces";
import { FilterService } from "./sharedServices/filterService";
import { HRISDataInfo } from "../models/code";

@Injectable()
export class CodeService {

    rcCode: IRCCode[] = [];
    dpCode: IDPCode[] = [];

    constructor(private dataService: DataService<IResponse>, private userService: UserService, private filterService: FilterService) { }

    getRC(): Promise<IRCCode[]> {
        return new Promise((resolve, reject) => {
            this.get(this.dataService.rc).then(data => {
                this.rcCode.length = 0;
                data.forEach(element => {
                    this.rcCode.push({ code: element.code, description: element.description, isSelected: false })
                });

                this.getSelectedRC().then(data => {
                    for (let rc of data) {
                        let i = this.rcCode.map(function (e) { return e.code; }).indexOf(rc);
                        this.rcCode[i].isSelected = true;
                    }
                }).catch((error) => {
                    reject(error);
                });

                resolve(this.rcCode);
            }).catch(error => {
                console.log('e', error);
                reject(error);
            });
        });
    }

    setSelectedRC(data: any) {
        return this.dataService.databaseService.Set(this.dataService.rcSelected.key, data).then(() => {
            this.setSelectedDP([]);
        });
    }

    getSelectedRC() {
        return this.get(this.dataService.rcSelected);
    }

    getDP(): Promise<IDPCode[]> {
        return new Promise((resolve, reject) => {
            this.get(this.dataService.dp).then(data => {
                let selectedDP = [];

                this.dpCode.length = 0;

                data.forEach(element => {
                    this.dpCode.push({ code: element.dpCode, description: element.dpName, rcCode: element.rcCode, isSelected: false })
                });

                this.getSelectedDP().then(data => {
                    for (let item of data) {
                        selectedDP = data;
                        let i = this.dpCode.map(function (e) { return e.code; }).indexOf(item);
                        this.dpCode[i].isSelected = true;
                    }
                }).catch((error) => {
                    reject(error);
                });

                this.getSelectedRC().then(data => {
                    console.log(this.dpCode, data, selectedDP);
                    this.filterService.filter(this.dpCode, data, selectedDP, "rcCode").then((data) => {
                        console.log('filtered', data);
                        this.dpCode = data;
                        resolve(this.dpCode);
                    }).catch((error) => {
                        reject(error);
                    });
                }).catch((error) => {
                    reject(error);
                });
            }).catch(error => {
                reject(error);
            });
        });
    }

    setSelectedDP(data: any) {
        return this.dataService.databaseService.Set(this.dataService.dpSelected.key, data);
    }

    getSelectedDP() {
        return this.get(this.dataService.dpSelected);
    }

    private get(value: HRISDataInfo): Promise<any> {
        value.param = { userid: this.userService.user.userID || "" };
        return new Promise((resolve, reject) => {
            this.dataService.get(value).then(data => {
                console.log('code service get', value, data);
                resolve(data.data);
            }).catch(error => {
                console.log('code service get error', value, error);
                console.log(error, 2);
                reject(error);
            });
        });
    }
}