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
var shared_1 = require("../../shared");
var ProjectFormComponent = (function () {
    function ProjectFormComponent(projectService, userService) {
        this.projectService = projectService;
        this.userService = userService;
    }
    //
    ProjectFormComponent.prototype.onSubmit = function () {
        console.log('Submit');
        console.log(this.newProject);
        // this.newProject.createdBy = '5728620832237db8158e161e';
        this.projectService.setProject(this.newProject).subscribe(function (data) {
            console.log(data);
            // this.lsPoints = this.points;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
            // console.log("Data loaded!")
        });
    };
    ProjectFormComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
            // console.log("Data loaded!")
        });
    };
    //
    ProjectFormComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.newProject = {
            name: '',
            description: ''
        };
    };
    ProjectFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [shared_1.ProjectService, shared_1.UserService],
            selector: 'app-project-form',
            templateUrl: 'project-form.component.html',
            styleUrls: ['project-form.component.css']
        }), 
        __metadata('design:paramtypes', [shared_1.ProjectService, shared_1.UserService])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());
exports.ProjectFormComponent = ProjectFormComponent;
//# sourceMappingURL=project-form.component.js.map