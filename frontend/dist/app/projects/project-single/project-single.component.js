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
// import {RouteParams} from '@angular/router-deprecated/index';
var shared_1 = require('../../shared');
var filter_data_pipe_1 = require('../../filter-data.pipe');
var ProjectSingleComponent = (function () {
    function ProjectSingleComponent(curr, 
        // params:RouteParams,
        projectService, userService, viewService) {
        this.projectService = projectService;
        this.userService = userService;
        this.viewService = viewService;
        this.isFormWorking = false;
        this.isWinVisible = false;
        this.viewsOfProject = new Array();
        this.id = curr.getParam('id');
        // this.id = params.get('id');
        console.log(this.id);
    }
    ProjectSingleComponent.prototype.getViewsOfProject = function (id) {
        var _this = this;
        this.viewService.getViewsOfProject(id)
            .subscribe(function (data) {
            _this.viewsOfProject = data;
            console.log(data);
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
        });
    };
    ProjectSingleComponent.prototype.removeView = function () {
    };
    ProjectSingleComponent.prototype.hideAddViewWindow = function () {
        this.isWinVisible = !this.isWinVisible;
    };
    ProjectSingleComponent.prototype.showAddViewWindow = function () {
        this.isWinVisible = !this.isWinVisible;
    };
    ProjectSingleComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
        });
    };
    ProjectSingleComponent.prototype.createView = function () {
        var _this = this;
        // var screenshotObj = {
        //     url: this.newView.screenshotURL,
        //     projectID: this.id,
        //     file: 'sc'
        // }
        //
        // this.screenshotService.make(screenshotObj).subscribe(
        //     data => {
        //         console.log(data);
        //     },
        //     error => console.error('Error: ' + error[0]),
        //     () => {
        //
        //     }
        // );
        this.isFormWorking = true;
        this.newView['projectID'] = this.id;
        this.viewService.setView(this.newView).subscribe(function (data) {
            _this.viewsOfProject.push(_this.newView);
            _this.isWinVisible = !_this.isWinVisible;
            _this.isFormWorking = false;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
        });
    };
    ProjectSingleComponent.prototype.getProjectData = function (id) {
        var _this = this;
        this.projectService.getProject(id)
            .subscribe(function (data) {
            _this.project = data;
            _this.projectID = _this.project._id;
            _this.projectName = _this.project.name;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
        });
    };
    ProjectSingleComponent.prototype.ngOnInit = function () {
        this.newView = {
            name: '',
            description: '',
            screenshotURL: ''
        };
        this.getProjectData(this.id);
        this.getViewsOfProject(this.id);
        this.getUsers();
    };
    ProjectSingleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-project-single',
            templateUrl: 'project-single.component.html',
            styleUrls: ['project-single.component.css'],
            bindings: [shared_1.ProjectService, shared_1.ViewService, shared_1.UserService],
            pipes: [filter_data_pipe_1.FilterData]
        }), 
        __metadata('design:paramtypes', [router_1.RouteSegment, shared_1.ProjectService, shared_1.UserService, shared_1.ViewService])
    ], ProjectSingleComponent);
    return ProjectSingleComponent;
}());
exports.ProjectSingleComponent = ProjectSingleComponent;
//# sourceMappingURL=project-single.component.js.map