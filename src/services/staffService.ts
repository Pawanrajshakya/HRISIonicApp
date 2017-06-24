import { Injectable } from '@angular/core';
import { DataService } from "./dataService";
import { UserService } from "./userService";

@Injectable()
export class StaffService {
    staff: any = {};

    constructor(private dataService: DataService<any>, private userService: UserService) { }

    getStaff(ein: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dataService.staffInfo.param = {
                userid: this.userService.user.userID,
                ein: ein
            };
            this.dataService.get(this.dataService.staffInfo).then(data => {
                resolve(data);
            }).catch(error => {
                reject(error);
            });
        })
    }

    getStaffList(): Promise<any> {
        // this.dataService.staffInfo.param = {
        //     userid: this.userService.user.userID
        // };

        return new Promise((resolve, reject) => {
            //     //this.databaseService.Set(value.key, values);
        });
    }
}