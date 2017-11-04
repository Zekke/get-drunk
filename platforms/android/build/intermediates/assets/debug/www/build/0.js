webpackJsonp([0],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendListPage = (function () {
    function FriendListPage(navCtrl, navParams, peopleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.peopleService = peopleService;
        this.loadPeople();
    }
    FriendListPage.prototype.loadPeople = function () {
        var _this = this;
        this.peopleService.load()
            .then(function (data) {
            _this.people = data;
        });
    };
    FriendListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendListPage');
    };
    return FriendListPage;
}());
FriendListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friend-list',template:/*ion-inline-start:"C:\Users\zekke\WebstormProjects\get-drunk\src\pages\friend-list\friend-list.html"*/'<!--\n  Generated template for the FriendListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FriendList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let person of people">\n      <ion-avatar item-left>\n        <img src="{{person.picture.thumbnail}}">\n      </ion-avatar>\n      <h2>{{person.name.first}} {{person.name.last}}</h2>\n      <p>{{person.email}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\zekke\WebstormProjects\get-drunk\src\pages\friend-list\friend-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]])
], FriendListPage);

//# sourceMappingURL=friend-list.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friend_list_friend_list__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.end = 'Choisis un bar';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    HomePage.prototype.testNav = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friend_list_friend_list__["a" /* FriendListPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    HomePage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOption = {
                center: latLng,
                zoom: 15
                //mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOption);
            _this.directionsDisplay.setMap(_this.map);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.directionsService.route({
                origin: latLng,
                destination: _this.end,
                travelMode: 'BICYCLING'
            }, function (response, status) {
                if (status === 'OK') {
                    _this.directionsDisplay.setDirections(response);
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\zekke\WebstormProjects\get-drunk\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- menu déroulant -->\n  <div id="floating-panel">\n    <b>Bar: </b>\n    <select [(ngModel)]="end" id="end" (change)="calculateAndDisplayRoute()">\n\n      <option value="1 Place des Arts, 95000 Cergy">O\'Sullivans, Cergy</option>\n      <option value="5 Avenue Jean Bart, 95000 Cergy">The Old English Pub, Cergy</option>\n\n      <option value="53 Rue du Faubourg Saint-Antoine, 75011 Paris">Corcoran\'s Irish Pub, Paris XIe</option>\n      <option value="6 Passage Thiéré, 75011 Paris">Meltdown, Paris XIe</option>\n    </select>\n  </div>\n  <div #map id="map"></div>\n  <div id="toggle-menu-button">\n    <button ion-button color="primary" (click)="testNav()">Amis</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\zekke\WebstormProjects\get-drunk\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map