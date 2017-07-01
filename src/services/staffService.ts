import { Injectable } from '@angular/core';
import { DataService } from "./dataService";
import { UserService } from "./userService";
import { IStaffList, IResponse } from "../shared/interfaces";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Injectable()
export class StaffService {
    staff: any = {};

    constructor(private dataService: DataService<any>, private userService: UserService) { }

    getStaff(ein: string): Promise<IResponse> {
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

    getStaffList(): Promise<IStaffList[]> {
        this.dataService.staffList.param = { userID: this.userService.user.userID };

        return new Promise((resolve, reject) => {
            this.dataService.get(this.dataService.staffList).then((response) => {
                resolve(<IStaffList>response.data);
            }).catch(error => {
                reject(error);
            })
        });
    }

    getStaffList$(): Observable<IStaffList[]> {
        this.dataService.staffList.param = { userID: this.userService.user.userID };

        return Observable.create((observer: Observer<IStaffList>) => {
            this.dataService.get(this.dataService.staffList).then((response) => {
                observer.next(<IStaffList>response.data);
            }).catch(error => {
                observer.error(error);
            })
        });
    }
}