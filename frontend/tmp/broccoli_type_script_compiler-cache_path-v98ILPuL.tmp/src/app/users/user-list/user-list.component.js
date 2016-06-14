"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/operator/map');
var core_1 = require('@angular/core');
var shared_1 = require("../../shared");
var UserListComponent = (function () {
    function UserListComponent(userService) {
        this.userService = userService;
    }
    UserListComponent.prototype.getViews = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
            // this.lsPoints = this.points;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
            // console.log("Data loaded!")
        });
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.getViews();
    };
    UserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            bindings: [shared_1.UserService],
            selector: 'app-user-list',
            templateUrl: 'user-list.component.html',
            styleUrls: ['user-list.component.css']
        }), 
        __metadata('design:paramtypes', [shared_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map