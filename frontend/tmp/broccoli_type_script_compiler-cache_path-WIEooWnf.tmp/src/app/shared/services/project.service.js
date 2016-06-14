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
var http_1 = require("@angular/http");
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.serverUrl = '/api/projects/';
        this.headers = new http_1.Headers();
    }
    ProjectService.prototype.makeRequest = function (requestURL, object) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.getProjects = function () {
        return this.makeRequest(this.serverUrl, {});
    };
    ProjectService.prototype.getProject = function (id) {
        return this.makeRequest(this.serverUrl + 'read', { id: id });
    };
    ProjectService.prototype.setProject = function (project) {
        return this.makeRequest(this.serverUrl + 'create', project);
    };
    ProjectService.prototype.updateProject = function (project, data) {
        return this.makeRequest(this.serverUrl + 'update', data);
    };
    ProjectService.prototype.removeProject = function (id) {
        return this.makeRequest(this.serverUrl + 'delete', id);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map