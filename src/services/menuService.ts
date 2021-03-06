import { Injectable } from '@angular/core';
import { IMenu, Filters } from '../shared/interfaces';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { UserService } from "./userService";

@Injectable()
export class MenuService {

    constructor(public userService: UserService) { }

    getObserable(): Observable<Array<IMenu>> {
        return Observable.create((observer: Observer<IMenu[]>) => {
            this.userService.loginStatus().subscribe((data) => {
                if (data._isUserLoggedIn === true) {
                    observer.next(this.getMenus());
                } else {
                    observer.next(this.getDefaultMenu());
                }
            });
            observer.next(this.getDefaultMenu());
        })
    }

    getReportObserable(): Observable<Array<IMenu>> {
        return Observable.create((observer: Observer<IMenu[]>) => {
            observer.next(this.getReportMenus());
        });
    }

    getDefaultMenu(): IMenu[] {
        return [
            {
                title: "Log-In",
                description: "Log In",
                component: 'LoginPage',
                icon: 'log-in'
            },
            {
                title: "About",
                description: "About",
                component: 'AboutPage',
                icon: 'information-circle'
            }]
    };

    getMenus(): IMenu[] {
        return [
            {
                title: "Reports",
                description: "Reports",
                component: 'ReportMenuPage',
                icon: 'stats'
            },
            {
                title: "Search",
                description: "Search",
                component: 'SearchPage',
                icon: "search"
            },
            {
                title: "Sync",
                description: "Sync",
                component: 'SyncPage',
                icon: "sync"
            },
            {
                title: "My Info",
                description: "My Info",
                component: 'MyInfoPage',
                icon: "ios-person-outline"
            },
            {
                title: "Logout",
                description: "Logout",
                component: 'Logout',
                icon: "log-out"
            },
            {
                title: "About",
                description: "About",
                component: 'AboutPage',
                icon: 'information-circle'
            }
        ]
    };

    getReportMenus(): IMenu[] {
        return [
            {
                title: "DSS-HRA-DHS Headcount Vacancy",
                description: "DSS-HRA-DHS Headcount Vacancy",
                component: 'ReportTabPage',
                reportComponent: 'HeadcountPage',
                dataComponent: 'HeadcountDataPage',
                icon: 'pie',
                hasFilterPage: true,
                filters: [Filters.RCs]
            },
            {

                title: "E-cards",
                description: "Agency Total # of E-cards Sent",
                component: 'ReportTabPage',
                reportComponent: 'EcardsPage',
                dataComponent: 'EcardsDataPage',
                icon: "stats",
                hasFilterPage: true,
                filters: [Filters.RCs]
            },
            {
                title: "Customer Service Complaints/Commendations",
                description: "Customer Service Complaints/Commendations",
                component: 'ReportTabPage',
                reportComponent: 'CustomerComplaintPage',
                dataComponent: 'CustomerComplaintDataPage',
                icon: "globe",
                hasFilterPage: true,
                filters: [Filters.RCs, Filters.DPs]
            },
            {
                title: "Total FY Paid OT $",
                description: "Total FY Paid OT $",
                component: 'ReportTabPage',
                reportComponent: 'OvertimePage',
                dataComponent: 'OvertimeDataPage',
                icon: 'pricetag',
                hasFilterPage: true,
                filters: [Filters.RCs]
            }
        ]
    };
}