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
var shared_1 = require('../../shared');
var filter_data_pipe_1 = require("../../filter-data.pipe");
var PointListComponent = (function () {
    function PointListComponent(pointService) {
        this.pointService = pointService;
    }
    PointListComponent.prototype.getPoints = function () {
        var _this = this;
        this.pointService.getPoints()
            .subscribe(function (data) {
            // console.log(data);
            _this.points = data;
            // this.lsPoints = this.points;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
            // console.log("Data loaded!")
        });
    };
    PointListComponent.prototype.removePoint = function (e) {
        var _this = this;
        e.preventDefault();
        this.pointService.removePoint(e.currentTarget.dataset.id)
            .subscribe(function (data) {
            // console.log(data);
            _this.points = data;
            // this.lsPoints = this.points;
        }, function (error) { return console.error('Error: ' + error[0]); }, function () {
            // console.log("Data loaded!")
        });
    };
    PointListComponent.prototype.ngOnInit = function () {
        this.getPoints();
    };
    PointListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            bindings: [shared_1.PointService],
            selector: 'app-point-list',
            templateUrl: 'point-list.component.html',
            styleUrls: ['point-list.component.css'],
            pipes: [filter_data_pipe_1.FilterData]
        }), 
        __metadata('design:paramtypes', [shared_1.PointService])
    ], PointListComponent);
    return PointListComponent;
}());
exports.PointListComponent = PointListComponent;
//# sourceMappingURL=point-list.component.js.map