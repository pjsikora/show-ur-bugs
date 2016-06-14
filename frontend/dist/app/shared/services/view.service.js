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
var http_1 = require('@angular/http');
var ViewService = (function () {
    function ViewService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.viewsApiUrl = '/api/views/';
        this.pointsApiUrl = '/api/points/';
    }
    ViewService.prototype.makeRequest = function (requestURL, object) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ViewService.prototype.getViews = function () {
        return this.makeRequest(this.viewsApiUrl, {});
    };
    ViewService.prototype.getViewsOfProject = function (id) {
        return this.makeRequest(this.viewsApiUrl + 'read', { projectID: id });
    };
    ViewService.prototype.setView = function (point) {
        return this.makeRequest(this.viewsApiUrl + 'create', point);
    };
    ViewService.prototype.updateView = function (point, data) {
        return this.makeRequest(this.viewsApiUrl + 'update', data);
    };
    ViewService.prototype.removeView = function (id) {
        return this.makeRequest(this.viewsApiUrl + 'delete', id);
    };
    ViewService.prototype.getPoints = function () {
        return this.makeRequest('/api/points', {});
    };
    ViewService.prototype.closePoint = function (id) {
        return this.makeRequest('/api/points/close', id);
    };
    ViewService.prototype.openPoint = function (id) {
        return this.makeRequest('/api/points/open', id);
    };
    ViewService.prototype.setPoint = function (point) {
        return this.makeRequest('/api/points/create', point);
    };
    ViewService.prototype.updatePoint = function (data) {
        return this.makeRequest('/api/points/update', data);
    };
    ViewService.prototype.removePoint = function (id) {
        return this.makeRequest('/api/points/delete', id);
    };
    ViewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ViewService);
    return ViewService;
}());
exports.ViewService = ViewService;
//# sourceMappingURL=view.service.js.map