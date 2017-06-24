webpackJsonp([4],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_tab__ = __webpack_require__(429);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportTabPageModule", function() { return ReportTabPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportTabPageModule = (function () {
    function ReportTabPageModule() {
    }
    return ReportTabPageModule;
}());
ReportTabPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__report_tab__["a" /* ReportTabPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__report_tab__["a" /* ReportTabPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__report_tab__["a" /* ReportTabPage */]
        ]
    })
], ReportTabPageModule);

//# sourceMappingURL=report-tab.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTabPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportTabPage = (function () {
    function ReportTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = this.navParams.data;
        console.log(this.menu);
    }
    ReportTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportTabPage');
    };
    return ReportTabPage;
}());
ReportTabPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-report-tab',template:/*ion-inline-start:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/report-tab/report-tab.html"*/'<ion-header>\n  <ion-navbar color="menu">\n    <ion-title>{{menu.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab tabTitle="Chart" [root]="menu.reportComponent" tabIcon="podium"></ion-tab>\n  <ion-tab tabTitle="Data" [root]="menu.dataComponent" tabIcon="cube"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/report-tab/report-tab.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ReportTabPage);

//# sourceMappingURL=report-tab.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map