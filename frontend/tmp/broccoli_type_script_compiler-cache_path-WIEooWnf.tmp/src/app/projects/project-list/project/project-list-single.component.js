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
// import {ProjectService} from "../../../shared";
var ProjectListSingleComponent = (function () {
    function ProjectListSingleComponent() {
    }
    ProjectListSingleComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        this.isVisible = !this.isVisible;
    };
    ProjectListSingleComponent.prototype.removeProject = function (e) {
        e.preventDefault();
        console.log("remove");
    };
    ProjectListSingleComponent.prototype.editProject = function (e) {
        e.preventDefault();
        console.log("edit");
    };
    ProjectListSingleComponent.prototype.closeProject = function (e) {
        e.preventDefault();
        console.log("close");
    };
    ProjectListSingleComponent.prototype.openProject = function (e) {
        e.preventDefault();
        console.log("open");
    };
    ProjectListSingleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('project'), 
        __metadata('design:type', Object)
    ], ProjectListSingleComponent.prototype, "project", void 0);
    ProjectListSingleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-list-single',
            templateUrl: 'project-list-single.component.html',
            styleUrls: ['project-list-single.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectListSingleComponent);
    return ProjectListSingleComponent;
}());
exports.ProjectListSingleComponent = ProjectListSingleComponent;
//# sourceMappingURL=project-list-single.component.js.map