webpackJsonp([27],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_menu__ = __webpack_require__(440);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportMenuPageModule", function() { return ReportMenuPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportMenuPageModule = (function () {
    function ReportMenuPageModule() {
    }
    return ReportMenuPageModule;
}());
ReportMenuPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__report_menu__["a" /* ReportMenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__report_menu__["a" /* ReportMenuPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__report_menu__["a" /* ReportMenuPage */]
        ]
    })
], ReportMenuPageModule);

//# sourceMappingURL=report-menu.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menuService__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMenuPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportMenuPage = (function () {
    function ReportMenuPage(navCtrl, navParams, menuService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuService = menuService;
    }
    ReportMenuPage.prototype.ionViewDidLoad = function () {
        this.get();
    };
    ReportMenuPage.prototype.get = function () {
        this.reportMenu = this.menuService.getReportMenus();
    };
    ReportMenuPage.prototype.redirect = function (item) {
        if (item.hasFilterPage) {
            this.navCtrl.push("FilterPage", item);
        }
        else {
            this.navCtrl.push(item.component, item);
        }
    };
    return ReportMenuPage;
}());
ReportMenuPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-report-menu',template:/*ion-inline-start:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/report-menu/report-menu.html"*/'<ion-header>\n  <ion-navbar color="menu">\n    <ion-title>Reports</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list no-lines>\n    <button ion-item *ngFor="let item of reportMenu" (click)="redirect(item)">\n        <ion-icon name="{{item.icon}}" item-left></ion-icon>\n        <h2>{{item.description}}</h2>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/report-menu/report-menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_menuService__["a" /* MenuService */]])
], ReportMenuPage);

//# sourceMappingURL=report-menu.js.map

/***/ })

});
//# sourceMappingURL=27.main.js.map