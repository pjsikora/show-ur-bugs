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
var core_1 = require('@angular/core');
var index_1 = require("../../shared/index");
var UserFormComponent = (function () {
    function UserFormComponent(userService) {
        this.userService = userService;
    }
    UserFormComponent.prototype.onSubmit = function (e) {
        console.log("User Submit");
        console.log(this.newUser);
        this.userService.setUser(this.newUser).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error('error' + error[0]);
        }, function () {
        });
    };
    UserFormComponent.prototype.ngOnInit = function () {
        this.newUser = {
            login: '',
            email: '',
            password: ''
        };
    };
    UserFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [index_1.UserService],
            selector: 'app-user-form',
            templateUrl: 'user-form.component.html',
            styleUrls: ['user-form.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.UserService])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map