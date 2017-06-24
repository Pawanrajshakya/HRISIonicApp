webpackJsonp([8],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_info__ = __webpack_require__(426);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInfoPageModule", function() { return MyInfoPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyInfoPageModule = (function () {
    function MyInfoPageModule() {
    }
    return MyInfoPageModule;
}());
MyInfoPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_info__["a" /* MyInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_info__["a" /* MyInfoPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_info__["a" /* MyInfoPage */]
        ]
    })
], MyInfoPageModule);

//# sourceMappingURL=my-info.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_staffService__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sharedServices_toastService__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInfoPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyInfoPage = (function () {
    function MyInfoPage(toastService, userService, staffService, loadingController) {
        this.toastService = toastService;
        this.userService = userService;
        this.staffService = staffService;
        this.loadingController = loadingController;
        this.userInfo = {};
        this.staffInfo = {};
    }
    MyInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait ...",
            spinner: 'circles' //dots'
        });
        loader.present().then(function () {
            _this.userService.getUserInfo().subscribe(function (data) {
                _this.userInfo = data.data;
                _this.staffService.getStaff(_this.userInfo.ein).then(function (data) {
                    _this.staffInfo = data.data;
                    loader.dismiss(true);
                }).catch(function (error) {
                    _this.toastService.present(error.message);
                    loader.dismiss(true);
                });
            }, function (error) {
                _this.toastService.present(error.message);
                loader.dismiss(true);
            });
        });
    };
    return MyInfoPage;
}());
MyInfoPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-info',template:/*ion-inline-start:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/my-info/my-info.html"*/'<ion-header>\n  <ion-navbar color="menu">\n    <ion-title>My Info</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <h1>{{userInfo.name}}</h1>\n  </ion-item>\n  <ion-card>\n    <ion-card-header>\n      Work\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-row>\n          <ion-col>✉ Outlook</ion-col>\n          <ion-col>{{staffInfo.workEmail}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Supervisor</ion-col>\n          <ion-col>{{staffInfo.supervisor}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Street</ion-col>\n          <ion-col>{{staffInfo.workAddress}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>City</ion-col>\n          <ion-col>{{staffInfo.workCity}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Office Phone</ion-col>\n          <ion-col>{{staffInfo.workPhone}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>State</ion-col>\n          <ion-col>NY</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Zip Code</ion-col>\n          <ion-col>{{staffInfo.workZipCode}}</ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Home\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-row>\n          <ion-col>Street</ion-col>\n          <ion-col>{{userInfo.address}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>City</ion-col>\n          <ion-col>{{userInfo.city}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Home Phone</ion-col>\n          <ion-col>{{userInfo.primaryPhone}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>State</ion-col>\n          <ion-col>{{userInfo.state}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Zip Code</ion-col>\n          <ion-col>{{userInfo.zipCode}}</ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Emergency\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item *ngFor="let item of userInfo.contactInfo">\n        <ion-row>\n          <ion-col>Name</ion-col>\n          <ion-col>{{item.name}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Relationship</ion-col>\n          <ion-col>{{item.relationship}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Primary Phone</ion-col>\n          <ion-col>{{item.secondaryPhone || item.primaryPhone}}</ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/my-info/my-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_sharedServices_toastService__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_staffService__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], MyInfoPage);

//# sourceMappingURL=my-info.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map