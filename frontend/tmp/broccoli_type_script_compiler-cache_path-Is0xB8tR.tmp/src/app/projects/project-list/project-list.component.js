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
var project_list_single_component_1 = require("./project/project-list-single.component");
var ProjectListComponent = (function () {
    function ProjectListComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (data) {
            // console.log(data);
            _this.projects = data;
            // this.lsPoints = this.points;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
            // console.log("Data loaded!")
        });
    };
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            bindings: [shared_1.ProjectService],
            selector: 'app-project-list',
            templateUrl: 'project-list.component.html',
            styleUrls: ['project-list.component.css'],
            directives: [project_list_single_component_1.ProjectListSingleComponent]
        }), 
        __metadata('design:paramtypes', [shared_1.ProjectService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map