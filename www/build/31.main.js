webpackJsonp([31],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rc__ = __webpack_require__(436);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RcPageModule", function() { return RcPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RcPageModule = (function () {
    function RcPageModule() {
    }
    return RcPageModule;
}());
RcPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__rc__["a" /* RcPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rc__["a" /* RcPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__rc__["a" /* RcPage */]
        ]
    })
], RcPageModule);

//# sourceMappingURL=rc.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_codeService__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sharedServices_toastService__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RcPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RcPage = (function () {
    function RcPage(navCtrl, navParams, viewCtrl, codeService, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.codeService = codeService;
        this.toastService = toastService;
        this.codes = [];
        this.selected = [];
    }
    RcPage.prototype.ionViewDidLoad = function () {
        this.get();
    };
    RcPage.prototype.get = function () {
        var _this = this;
        this.codeService.getRC().then(function (data) {
            _this.codes = data;
            _this.codeService.getSelectedRC().then(function (data) {
                _this.selected = data;
            }).catch(function (error) {
                _this.toastService.present(error.message);
            });
        }).catch(function (error) {
            console.log(error, 1);
            _this.toastService.present(error.message);
        });
    };
    RcPage.prototype.onSelect = function (value) {
        try {
            var i = this.selected.indexOf(value);
            (i !== -1) ? this.selected.splice(i, 1) : this.selected.push(value);
            this.codeService.setSelectedRC(this.selected);
            console.log('onSelect', this.selected);
        }
        catch (error) {
            this.toastService.present(error, "bottom");
        }
    };
    RcPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return RcPage;
}());
RcPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rc',template:/*ion-inline-start:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/filters/rc/rc.html"*/'<ion-header>\n  <ion-navbar color="modal">\n    <ion-title>RCs</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Done</span>\n        <ion-icon name="close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list no-lines>\n    <ion-item *ngFor="let code of codes">\n      <ion-label>{{code.description}}</ion-label>\n      <ion-checkbox [checked]="code.isSelected === true" (click)="onSelect(code.code)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/filters/rc/rc.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_codeService__["a" /* CodeService */],
        __WEBPACK_IMPORTED_MODULE_3__services_sharedServices_toastService__["a" /* ToastService */]])
], RcPage);

//# sourceMappingURL=rc.js.map

/***/ })

});
//# sourceMappingURL=31.main.js.map