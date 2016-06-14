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
require('rxjs/add/operator/map');
// import { RouteParams } from '@angular/router-deprecated/index';
var router_1 = require('@angular/router');
var shared_1 = require("../../shared");
var ViewSingleComponent = (function () {
    // newPoint: PointModel;
    function ViewSingleComponent(params, viewService, pointService) {
        this.viewService = viewService;
        this.pointService = pointService;
        this.isWinVisible = false;
        this.id = params.getParam('id');
        console.log(this.id);
    }
    ViewSingleComponent.prototype.getPoints = function () {
        var _this = this;
        this.lsPoints = localStorage.getItem('view_points');
        if (this.lsPoints != null) {
            this.points = this.lsPoints;
        }
        // this.httpReq.makeRequest('points', '',  null)
        this.pointService.getPointsOfView(this.id)
            .subscribe(function (data) {
            _this.points = data;
            _this.lsPoints = _this.points;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
        });
    };
    ViewSingleComponent.prototype.closeWindow = function (e) {
        this.isWinVisible = !this.isWinVisible;
        this.nameOfPoint = null;
        this.descOfPoint = null;
        this.newX = null;
        this.newY = null;
    };
    ViewSingleComponent.prototype.showWindow = function (e) {
        this.isWinVisible = !this.isWinVisible;
        this.newX = e.layerX;
        this.newY = e.layerY;
    };
    ViewSingleComponent.prototype.createPoint = function (e) {
        var _this = this;
        var point = {
            x: this.newX,
            y: this.newY,
            viewID: this.id,
            name: this.nameOfPoint,
            isOpened: true,
            description: this.descOfPoint,
            createdBy: '5728620832237db8158e161e'
        };
        console.log(point);
        // Push element to global array and draw it!
        // this.points.push(point);
        // console.log(point);
        // Send to server
        this.viewService.setPoint(point)
            .subscribe(function (data) {
            // TODO Synchronize with localstorage
            console.log(data);
            _this.points.push(point);
            _this.closeWindow(null);
        }, function (error) { return console.log('Error: ' + error[0]); }, function () {
        });
    };
    ViewSingleComponent.prototype.openPoint = function (e) {
        var _this = this;
        e.preventDefault();
        var idOfElement = e.currentTarget.dataset.id;
        this.viewService.openPoint({ _id: idOfElement })
            .subscribe(function (data) {
            _this.points.forEach(function (el, index) {
                if (el._id == idOfElement) {
                    el.isOpened = true;
                }
            });
            console.log(data);
        }, function (error) { return console.log("ERROR: " + error[0]); });
    };
    ViewSingleComponent.prototype.closePoint = function (e) {
        var _this = this;
        e.preventDefault();
        var idOfElement = e.currentTarget.dataset.id;
        this.viewService.closePoint({ _id: idOfElement })
            .subscribe(function (data) {
            _this.points.forEach(function (el, index) {
                if (el._id == idOfElement) {
                    el.isOpened = false;
                }
            });
            console.log(data);
        }, function (error) { return console.log("ERROR: " + error[0]); });
    };
    ViewSingleComponent.prototype.deletePoint = function (event) {
        var _this = this;
        event.preventDefault();
        var elId = event.target.dataset.id, idInArray = null, i = null;
        this.viewService
            .removePoint({ _id: event.target.dataset.id })
            .subscribe(function (data) {
            _this.points.forEach(function (el, index) {
                if (el._id == event.target.dataset.id) {
                    i = index;
                }
            });
            _this.points.splice(i, 1);
            // TODO Synchronize with localstorage
        }, function (error) { return console.log('Error: ' + error[0]); }, function () {
        });
    };
    // TODO Update method!!! Currently it only removes the element
    ViewSingleComponent.prototype.updatePoint = function (event) {
        var elId = event.target.dataset.id, idInArray = null;
        // Check index of element
        this.points.forEach(function (el, index) {
            if (el._id == elId) {
                idInArray = index;
            }
        });
        // Remove element with index
        this.points.splice(idInArray, 1);
        this.viewService
            .removePoint({ _id: event.target.dataset.id })
            .subscribe(function (data) {
            // TODO Synchronize with localstorage
        }, function (error) { return console.log('Error: ' + error[0]); }, function () {
        });
    };
    ViewSingleComponent.prototype.rightMenuShowDetails = function () {
    };
    ViewSingleComponent.prototype.ngOnInit = function () {
        this.getPoints();
    };
    ViewSingleComponent = __decorate([
        core_1.Component({
            bindings: [shared_1.ViewService, shared_1.PointService],
            moduleId: module.id,
            selector: 'app-view-single',
            templateUrl: 'view-single.component.html',
            styleUrls: ['view-single.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.RouteSegment, shared_1.ViewService, shared_1.PointService])
    ], ViewSingleComponent);
    return ViewSingleComponent;
}());
exports.ViewSingleComponent = ViewSingleComponent;
//# sourceMappingURL=view-single.component.js.map