import {Component, OnInit} from '@angular/core';
import {Route} from "@angular/router";
import 'rxjs/add/operator/map'
// import { RouteParams } from '@angular/router-deprecated/index';
import {CanDeactivate, OnActivate, Router, RouteSegment} from '@angular/router';


import {PointModel, ViewService, PointService} from "../../shared";

@Component({
    bindings: [ViewService, PointService],
    moduleId: module.id,
    selector: 'app-view-single',
    templateUrl: 'view-single.component.html',
    styleUrls: ['view-single.component.css']
})


export class ViewSingleComponent {
    lsPoints;
    points;
    id;
    isWinVisible:boolean = false;
    nameOfPoint;
    descOfPoint;
    newX;
    newY;

    constructor(params:RouteSegment,
                public viewService:ViewService,
                public pointService:PointService) {
        this.id = params.getParam('id');
    }

    getPoints() {
        this.lsPoints = localStorage.getItem('view_points');

        if (this.lsPoints != null) {
            this.points = this.lsPoints;
        }

        this.pointService.getPointsOfView(this.id)
            .subscribe(
                data => {
                    this.points = data;
                    this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                }
            );
    }

    closeWindow(e):void {
        this.isWinVisible = !this.isWinVisible;
        this.nameOfPoint = null;
        this.descOfPoint = null;
        this.newX = null;
        this.newY = null;
    }

    showWindow(e):void {
        this.isWinVisible = !this.isWinVisible;

        this.newX = e.layerX;
        this.newY = e.layerY;
    }

    createPoint(e) {
        var point = {
            x: this.newX,
            y: this.newY,
            viewID: this.id,
            name: this.nameOfPoint,
            isOpened: true,
            description: this.descOfPoint,
            createdBy: '5728620832237db8158e161e'
        }

        console.log(point);

        // Push element to global array and draw it!
        // this.points.push(point);
        // console.log(point);

        // Send to server
        this.viewService.setPoint(point)
            .subscribe(
                data => {
                    // TODO Synchronize with localstorage
                    console.log(data);
                    this.points.push(point);
                    this.closeWindow(null);
                },
                error => console.log('Error: ' + error[0]),
                () => {
                }
            );
    }

    openPoint(e) {
        e.preventDefault();
        let idOfElement = e.currentTarget.dataset.id;
        this.viewService.openPoint({_id: idOfElement})
            .subscribe(
                data => {
                    this.points.forEach(function (el, index) {
                        if (el._id == idOfElement) {
                            el.isOpened = true;
                        }
                    });
                    console.log(data)
                },
                error => console.log("ERROR: " + error[0])
            );
    }

    closePoint(e) {
        e.preventDefault();
        let idOfElement = e.currentTarget.dataset.id;
        this.viewService.closePoint({_id: idOfElement})
            .subscribe(
                data => {
                    this.points.forEach(function (el, index) {
                        if (el._id == idOfElement) {
                            el.isOpened = false;
                        }
                    });
                    console.log(data)
                },
                error => console.log("ERROR: " + error[0])
            );
    }

    deletePoint(event) {
        event.preventDefault();
        var elId = event.target.dataset.id,
            idInArray = null,
            i = null;

        this.viewService
            .removePoint({_id: event.target.dataset.id})
            .subscribe(
                data => {
                    this.points.forEach(function (el, index) {
                        if (el._id == event.target.dataset.id) {
                            i = index;
                        }
                    });

                    this.points.splice(i, 1);

                    // TODO Synchronize with localstorage
                },
                error => console.log('Error: ' + error[0]),
                () => {
                }
            );
    }

    // TODO Update method!!! Currently it only removes the element
    updatePoint(event) {
        var elId = event.target.dataset.id,
            idInArray = null;

        // Check index of element
        this.points.forEach(function (el, index) {
            if (el._id == elId) {
                idInArray = index;
            }
        });

        // Remove element with index
        this.points.splice(idInArray, 1);

        this.viewService
            .removePoint({_id: event.target.dataset.id})
            .subscribe(
                data => {
                    // TODO Synchronize with localstorage
                },
                error => console.log('Error: ' + error[0]),
                () => {
                }
            );
    }


    rightMenuShowDetails() {

    }

    ngOnInit() {
        this.getPoints();
    }
}