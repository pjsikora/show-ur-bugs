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
var router_1 = require('@angular/router');
var view_list_component_1 = require('./views/view-list.component');
var index_1 = require('./views/view-single/index');
var index_2 = require('./users/index');
var index_3 = require('./points/point-list/index');
var index_4 = require('./projects/index');
var Ng2cliAppComponent = (function () {
    function Ng2cliAppComponent(router) {
        this.router = router;
        this.title = 'ng2cli works!';
    }
    Ng2cliAppComponent.prototype.ngOnInit = function () { };
    Ng2cliAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng2cli-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'ng2cli.component.html',
            styleUrls: ['ng2cli.component.css']
        }),
        router_1.Routes([
            { path: '/view/:id', component: index_1.ViewSingleComponent },
            { path: '/views', component: view_list_component_1.ViewListComponent },
            { path: '/users', component: index_2.UserListComponent },
            { path: '/users-form', component: index_2.UserFormComponent },
            { path: '/user/:id', component: index_2.UserSingleComponent },
            { path: '/points', component: index_3.PointListComponent },
            { path: '/projects', component: index_4.ProjectListComponent },
            { path: '/project/:id', component: index_4.ProjectSingleComponent },
            { path: '/projects-form', component: index_4.ProjectFormComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Ng2cliAppComponent);
    return Ng2cliAppComponent;
}());
exports.Ng2cliAppComponent = Ng2cliAppComponent;
//# sourceMappingURL=ng2cli.component.js.map