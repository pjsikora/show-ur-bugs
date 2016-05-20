import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {ViewService} from "./view.service";
import {RouteParams} from "angular2/router";
import {PointModel} from "../point/point.model";
import {PointService} from "../point/point.service";
import {HTTPReq} from "../httpreq.service";


@Component({
    bindings: [ViewService, PointService, HTTPReq],
    styles: [`
        .rightMenu {position: fixed; right: 0; top: 0; overflow: scroll; background: #fff; border-left: 1px solid #000; padding: 10px; width: 200px; height: 100%}
        .rightMenu .point__details.active { display: block; }

        .screenshotView {position: relative; padding-right: 200px; }

        .point { position: absolute; width: 10px; height: 10px; border: 1px solid #fff; background: black; border-radius: 50%;}

        .window__overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,.5);}
        .window__content { position: absolute; top: 50%; left: 50%; padding: 10px; transform: translate(-50%, -50%); width: 500px; height: 500px; background: #fff; border-radius: 10px; }
    `],
    template: `
		<div class="screenshotView" style="position: relative;" (click)="showWindow($event)">
			<div *ngFor="#point of points" class="point" style=" top: {{point.y}}; left: {{point.x}}"></div>
			<img src="/img/ND.jpg" alt="">
		</div>
		<div class="rightMenu">
		    <div *ngFor="#point of points" style="" (click)="rightMenuShowDetails()">
		        <div class="point__catcher">{{point.name}}</div>
		          <div class="point__details">
		            <p>x:{{point.x}} y:{{point.y}}</p>
		            <p>description: {{point.description}}</p>
		            <p>author: {{point.createdBy}}</p>
		            <p>date: {{point.createDate}}</p>
		            <p>isOpened: {{point.isOpened}}</p>
		          </div>
		          <button class="button success" (click)="updatePoint($event)" attr.data-id="{{point._id}}">Edit</button>
		          <button class="button alert" (click)="deletePoint($event)" attr.data-id="{{point._id}}">Delete</button>
		          <button class="button" (click)="closePoint($event)" attr.data-id="{{point._id}}">Close</button>
		    </div>
        </div>
        <div class="window__overlay" [style.display]="isWinVisible ? 'block' : 'none'">
            <div class="window__content">
                <div class="window__close" (click)="closeWindow($event)">close</div>
                <input type="text" placeholder="Name" [(ngModel)]="nameOfPoint">
                <textarea name="" id="" cols="30" rows="10" placeholder="Description" [(ngModel)]="descOfPoint"></textarea>
                <button (click)="createPoint()" class="button">Add point</button>
            </div>
        </div>
        
	`
})

export class ViewComponent {
    lsPoints;
    points;
    id;
    isWinVisible: boolean = false;
    nameOfPoint;
    descOfPoint;
    newX;
    newY;
    
    // newPoint: PointModel;

    constructor(params:RouteParams,
                public viewService:ViewService,
                public pointService:PointService,
                public httpReq:HTTPReq) {
        this.id = params.get('id');
        console.log(this.id);
    }

    getPoints() {
        this.lsPoints = localStorage.getItem('view_points');

        if (this.lsPoints != null) {
            this.points = this.lsPoints;
        }

        // this.httpReq.makeRequest('points', '',  null)
        this.pointService.getPointsOfView(this.id)
            .subscribe(
                data => {
                    this.points = data;
                    this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {}
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
            x : this.newX,
            y: this.newY,
            viewID: this.id,
            name: this.nameOfPoint,
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
                () => {}
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
                    this.points.forEach(function(el, index) {
                        if (el._id == event.target.dataset.id) {
                            i = index;
                        }
                    });

                    this.points.splice(i, 1);

                    // TODO Synchronize with localstorage
                },
                error => console.log('Error: ' + error[0]),
                () => {}
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