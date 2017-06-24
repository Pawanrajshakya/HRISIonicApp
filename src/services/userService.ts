import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { User } from "../models/code";
import { Subject } from "rxjs/Subject";
import { IUser, IResponse } from "../shared/interfaces";
import { DataService } from "./dataService";

@Injectable()
export class UserService {
    public user: User;

    private status = new Subject<{ _isUserLoggedIn: boolean, _user: IUser }>();

    public loginStatus() {
        return this.status.asObservable();
    }

    constructor(private dataService: DataService<User>) {
        console.log('User Service Ready');
        this.user = new User();
        this.checkStatus();
    }

    private checkStatus() {
        this.dataService.user.param = "lanID=" + this.user.lanID;
        this.dataService.get(this.dataService.user).then(data => {
            console.log('Checking Status', this.dataService.user, data);
            if (data.data !== null && data.status === 0) {
                this.user = data.data;
                this.status.next({ _isUserLoggedIn: true, _user: data.data });
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    private getUser(lanID: string): Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            this.dataService.user.param = "lanID=" + lanID;
            console.log('checkStatus', lanID);
            this.dataService.get(this.dataService.user).then((data) => {
                console.log('checkStatus 1', data);
                if (data.data !== null && data.status === 0) {
                    this.user = <User>data.data;
                    this.status.next({ _isUserLoggedIn: true, _user: this.user });
                    observer.next(true);
                }
            }).catch((error) => {
                console.log('checkStatus 2', error);
                observer.error(error);
            });
        });
    }

    public getUserInfo(): Observable<IResponse> {
        return Observable.create((observer: Observer<any>) => {
            this.dataService.userInfo.param = "ein=" + this.user.ein;
            this.dataService.get(this.dataService.userInfo).then((data) => {
                console.log(data);
                if (data.data !== null && data.status === 0) {
                    observer.next(data);
                }
            }).catch((error) => {
                observer.error(error);
            });
        });
    }

    login(lanID: string): Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            this.getUser(lanID).subscribe((data) => {
                observer.next(data);
            }, (error) => {
                observer.error(error);
            });
        });
    }

    logout() {
        this.dataService.databaseService.Clear().then((data) => {
            this.status.next({ _isUserLoggedIn: false, _user: null });
        });
    }

}