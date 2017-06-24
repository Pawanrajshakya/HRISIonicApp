webpackJsonp([10],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dp__ = __webpack_require__(296);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpPageModule", function() { return DpPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DpPageModule = (function () {
    function DpPageModule() {
    }
    return DpPageModule;
}());
DpPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dp__["a" /* DpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dp__["a" /* DpPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__dp__["a" /* DpPage */]
        ]
    })
], DpPageModule);

//# sourceMappingURL=dp.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharedServices_toastService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_codeService__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DpPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DpPage = (function () {
    function DpPage(navCtrl, navParams, viewCtrl, codeService, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.codeService = codeService;
        this.toastService = toastService;
        this.codes = [];
        this.selected = [];
    }
    DpPage.prototype.ionViewDidLoad = function () {
        this.get();
    };
    DpPage.prototype.get = function () {
        var _this = this;
        this.codeService.getDP().then(function (data) {
            _this.codes = data;
            _this.codeService.getSelectedDP().then(function (data) {
                _this.selected = data;
            }).catch(function (error) {
                _this.toastService.present(error.message);
            });
        }).catch(function (error) {
            _this.toastService.present(error.message);
        });
    };
    DpPage.prototype.onSelect = function (value) {
        try {
            var i = this.selected.indexOf(value);
            (i !== -1) ? this.selected.splice(i, 1) : this.selected.push(value);
            this.codeService.setSelectedDP(this.selected);
        }
        catch (error) {
            this.toastService.present(error, "bottom");
        }
    };
    DpPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return DpPage;
}());
DpPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-dp',template:/*ion-inline-start:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/dp/dp.html"*/'<ion-header>\n  <ion-navbar color="modal">\n    <ion-title>DPs</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Done</span>\n        <ion-icon name="close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list no-lines>\n    <ion-item *ngFor="let code of codes">\n      <ion-label>{{code.description}}</ion-label>\n      <ion-checkbox [checked]="code.isSelected === true" (click)="onSelect(code.code)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/dp/dp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__services_codeService__["a" /* CodeService */],
        __WEBPACK_IMPORTED_MODULE_2__services_sharedServices_toastService__["a" /* ToastService */]])
], DpPage);

//# sourceMappingURL=dp.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map