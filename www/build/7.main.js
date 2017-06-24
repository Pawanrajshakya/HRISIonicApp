webpackJsonp([7],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__note__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePageModule", function() { return NotePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotePageModule = (function () {
    function NotePageModule() {
    }
    return NotePageModule;
}());
NotePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__note__["a" /* NotePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__note__["a" /* NotePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__note__["a" /* NotePage */]
        ]
    })
], NotePageModule);

//# sourceMappingURL=note.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_noteService__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sharedServices_toastService__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotePage = (function () {
    function NotePage(navCtrl, navParams, noteService, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteService = noteService;
        this.toastService = toastService;
        this.note = "";
    }
    NotePage.prototype.ngOnInit = function () {
        this.get();
    };
    NotePage.prototype.get = function () {
        var _this = this;
        var promise = this.noteService.get();
        promise.then(function (data) {
            _this.notes = data;
        }).catch(function (error) {
            _this.toastService.present(error, "bottom");
        });
    };
    NotePage.prototype.save = function (value) {
        var _this = this;
        this.noteService.add(value).then(function (data) {
            _this.get();
            _this.note = "";
            _this.toastService.present(data);
        }).catch(function (error) {
            _this.toastService.present(error, "bottom");
        });
    };
    NotePage.prototype.remove = function (value) {
        var _this = this;
        this.noteService.remove(value).then(function (data) {
            _this.get();
            _this.toastService.present(data);
        }).catch(function (error) {
            _this.toastService.present(error, "bottom");
        });
    };
    return NotePage;
}());
NotePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-note',template:/*ion-inline-start:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/note/note.html"*/'<ion-list nolines>\n  <ion-item>\n    <ion-label floating>Notes</ion-label>\n    <ion-input type="text" [(ngModel)]="note"></ion-input>\n  </ion-item>\n  <ion-item *ngIf="note.length > 0">\n    <button ion-button block small (click)="save(note)" [disabled]="note.length === 0">Add</button>\n  </ion-item>\n  <ion-item-sliding *ngFor="let note of notes;trackBy:note.CreatedOn">\n    <ion-item>\n      <p ion-label text-justify text-wrap>{{note.Note}}</p>\n      <ion-row>\n        <ion-col text-right>\n          <small ion-text color="label-light">{{note.CreatedOn}}</small>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item-options slide="left">\n      <button ion-button color="danger" (click)="remove(note)">\n          <ion-icon name="trash"></ion-icon>\n          Remove\n        </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>'/*ion-inline-end:"/Users/pawanrajshakya/Documents/IonicApps/HRISIonicApp/src/pages/note/note.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_noteService__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_3__services_sharedServices_toastService__["a" /* ToastService */]])
], NotePage);

//# sourceMappingURL=note.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map