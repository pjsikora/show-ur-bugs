import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {ViewService} from "./view.service";
import {RouteParams} from "angular2/router";

@Component({
    // selector: 'my-app',
    bindings: [ViewService],
    styles: [`
        .rightMenu {position: fixed; right: 0; top: 0; overflow: scroll; background: #fff; border-left: 1px solid #000; padding: 10px; width: 200px; height: 100%}
        // .rightMenu .point__details { display: none; }
        .rightMenu .point__details.active { display: block; }

        .screenshotView {position: relative; padding-right: 200px; }

        .point { position: absolute; width: 10px; height: 10px; border: 1px solid #fff; background: black; border-radius: 50%;}

        // .window__overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,.5);}
        // .window__content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 500px; height: 500px; background: #fff; }

    `],
    template: `
		<div class="screenshotView" style="position: relative;" (click)="createPoint($event)">
			<div *ngFor="#point of points" class="point" style=" top: {{point.y}}; left: {{point.x}}" (click)="showDetails()"></div>
			<img src="/img/ND.jpg" alt="">
		</div>
		<div class="rightMenu">
		    <div *ngFor="#point of points" style="" (click)="rightMenuShowDetails()">
		        <div class="point__catcher">{{point.name}}</div>
		          <div class="point__details">
		            <p>x:{{point.x}} y:{{point.y}}</p>
		            <p>description: {{point.description}}</p>
		            <p>author: {{point.author}}</p>
		            <p>date: {{point.date}}</p>
		            <p>isOpened: {{point.isOpened}}</p>
		            <p>isRemoved: {{point.isRemoved}}</p>
		          </div>
		          <button class="button success" (click)="updatePoint($event)" attr.data-id="{{point._id}}">Edit</button>
		          <button class="button alert" (click)="deletePoint($event)" attr.data-id="{{point._id}}">Delete</button>
		          <button class="button" (click)="closePoint($event)" attr.data-id="{{point._id}}">Close</button>
		    </div>
        </div>
        <div class="window__overlay">
            <div class="window__content">
                <div class="window__close"></div>
            </div>
        </div>
	`
})
export class ViewComponent {
    lsPoints;
    points;
    ding;
    id;

    constructor(params:RouteParams,
                public viewService:ViewService) {
        this.id = params.get('id');
        console.log(this.id);
    }

    getPoints() {
        this.lsPoints = localStorage.getItem('view_points');

        if (this.lsPoints != null) {
            this.points = this.lsPoints;
        }

        this.viewService.getPoints()
            .subscribe(
                data => {
                    // console.log(data);
                    this.points = data;
                    this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }

    createPoint(e) {
        // Create point
        var point = {
            name: 'Added',
            x: e.layerX,
            y: e.layerY,
            isOpened: true

            //viewID: 'dddd'
        };

        // Push element to global array and draw it!
        this.points.push(point);

        // Send to server
        this.viewService.setPoint(point)
            .subscribe(
                data => {
                    // TODO Synchronize with localstorage
                },
                error => console.log('Error: ' + error[0]),
                () => {
                }
            );
    }

    deletePoint(event) {
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

        this
            .viewService
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

        // console.log(this.points);

        this
            .viewService
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