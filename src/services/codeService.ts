import { Injectable } from '@angular/core';
import { DataService } from "./dataService";
import { UserService } from "./userService";
import { IRCCode, IDPCode, IResponse } from "../shared/interfaces";
import { FilterService } from "./sharedServices/filterService";

@Injectable()
export class CodeService {

    rcCode: IRCCode[] = [];
    dpCode: IDPCode[] = [];
    selectedRC: any[] = [];
    selectedDP: any[] = [];
    filteredDP: IDPCode[] = [];

    constructor(public dataService: DataService<IResponse>, private userService: UserService, private filterService: FilterService) {
        this.doInitialization()
    }

    doInitialization() {

        this.dataService.databaseService.Get(this.dataService.rcSelected.key).then(data => {
            this.selectedRC = data.data;
        });

        this.dataService.databaseService.Get(this.dataService.dpSelected.key).then(data => {
            this.selectedDP = data.data;
        });

        if (this.dataService.rc.hasParam)
            this.dataService.rc.param = { userid: this.userService.user.userID || "" };

        this.dataService.get(this.dataService.rc).then(data => {

            data.data.forEach(element => {
                this.rcCode.push(
                    {
                        code: element.code,
                        description: element.description,
                        isSelected: (this.selectedRC.indexOf(element.code) !== -1)
                    })
            });
        });

        if (this.dataService.dp.hasParam)
            this.dataService.dp.param = { userid: this.userService.user.userID || "" };

        this.dataService.get(this.dataService.dp).then(data => {

            data.data.forEach(element => {
                this.dpCode.push({
                    code: element.dpCode,
                    description: element.dpName,
                    isSelected: (this.selectedDP.indexOf(element.code) !== -1),
                    rcCode: element.rcCode
                })
            });
            this.filterService.filter(this.dpCode, this.selectedRC, this.selectedDP, "rcCode", "code").then(filteredDPs => {
                this.filteredDP = filteredDPs;
            });
        });
    }

    setSelectedRC(value: string): Promise<IRCCode[]> {
        return new Promise((resolve, reject) => {
            try {
                let index = this.selectedRC.indexOf(value);

                (index !== -1) ? this.selectedRC.splice(index, 1) : this.selectedRC.push(value);

                index = this.rcCode.map((d) => { return d.code; }).indexOf(value);

                this.rcCode[index].isSelected = !this.rcCode[index].isSelected;

                return this.dataService.databaseService.Set(this.dataService.rcSelected.key, this.selectedRC).then((data) => {
                    this.clearAllSelectedDP().then(() => {
                        this.filterService.filter(this.dpCode, this.selectedRC, this.selectedDP, "rcCode", "code").then(filteredDPs => {
                            this.filteredDP = filteredDPs;
                            this.selectedDP.length = 0;
                            this.dataService.databaseService.Set(this.dataService.dpSelected.key, this.selectedDP);
                            resolve(data.data);
                        });
                    });
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    setSelectedDP(value: string): Promise<IDPCode[]> {
        return new Promise((resolve, reject) => {
            try {
                let index = this.selectedDP.indexOf(value);

                (index !== -1) ? this.selectedDP.splice(index, 1) : this.selectedDP.push(value);

                index = this.dpCode.map((d) => { return d.code; }).indexOf(value);

                this.dpCode[index].isSelected = !this.dpCode[index].isSelected;

                return this.dataService.databaseService.Set(this.dataService.dpSelected.key, this.selectedDP).then((data) => {
                    resolve(data.data);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    private clearAllSelectedDP(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                this.selectedDP.forEach(item => {
                    this.dpCode[this.dpCode.map((d) => { return d.code; }).indexOf(item)].isSelected = false;
                });
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    private clearAllSelectedRC(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                this.selectedRC.forEach(item => {
                    this.rcCode[this.rcCode.map((d) => { return d.code; }).indexOf(item)].isSelected = false;
                });
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    public clearAllSelected(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                this.clearAllSelectedRC().then(() => {
                    this.dataService.databaseService.Remove(this.dataService.rcSelected.key).then(() => {
                        this.selectedRC.length = 0;
                    })
                })
                this.clearAllSelectedDP().then(() => {
                    this.dataService.databaseService.Remove(this.dataService.dpSelected.key).then(() => {
                        this.selectedDP.length = 0;
                    })
                })
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }
}