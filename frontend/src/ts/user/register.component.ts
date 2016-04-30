import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {UserService} from "./user.service";

@Component({
    template: `
		
	`
})
export class ViewComponent {
    lsPoints;
    points;
    ding;

    constructor(public userService:UserService) {

    }

    // getPoints() {
    //     this.lsPoints = localStorage.getItem('view_points');
    //
    //     if (this.lsPoints != null) {
    //         this.points = this.lsPoints;
    //     }
    //
    //     this.appService.getPoints()
    //         .subscribe(
    //             data => {
    //                 // console.log(data);
    //                 this.points = data;
    //                 this.lsPoints = this.points;
    //             },
    //             error => console.error('Error: ' + error[0]),
    //             () => {
    //                 // console.log("Data loaded!")
    //             }
    //         )
    // }
    //
    // createPoint(e) {
    //     // Create point
    //     var point = {
    //         name: 'Added',
    //         x: e.layerX,
    //         y: e.layerY,
    //         isOpened: true
    //
    //         //viewID: 'dddd'
    //     };
    //
    //     // Push element to global array and draw it!
    //     this.points.push(point);
    //
    //     // Send to server
    //     this.appService.setPoint(point)
    //         .subscribe(
    //             data => {
    //                 // TODO Synchronize with localstorage
    //             },
    //             error => console.log('Error: ' + error[0]),
    //             () => {
    //             }
    //         );
    // }
    //
    // deletePoint(event) {
    //     var elId = event.target.dataset.id,
    //         idInArray = null;
    //
    //     // Check index of element
    //     this.points.forEach(function (el, index) {
    //         if (el._id == elId) {
    //             idInArray = index;
    //         }
    //     });
    //
    //     // Remove element with index
    //     this.points.splice(idInArray, 1);
    //
    //     this
    //         .appService
    //         .removePoint({_id: event.target.dataset.id})
    //         .subscribe(
    //             data => {
    //                 // TODO Synchronize with localstorage
    //             },
    //             error => console.log('Error: ' + error[0]),
    //             () => {
    //             }
    //         );
    // }
    //
    // // TODO Update method!!! Currently it only removes the element
    // updatePoint(event) {
    //     var elId = event.target.dataset.id,
    //         idInArray = null;
    //
    //     // Check index of element
    //     this.points.forEach(function (el, index) {
    //         if (el._id == elId) {
    //             idInArray = index;
    //         }
    //     });
    //
    //     // Remove element with index
    //     this.points.splice(idInArray, 1);
    //
    //     // console.log(this.points);
    //
    //     this
    //         .appService
    //         .removePoint({_id: event.target.dataset.id})
    //         .subscribe(
    //             data => {
    //                 // TODO Synchronize with localstorage
    //             },
    //             error => console.log('Error: ' + error[0]),
    //             () => {
    //             }
    //         );
    // }
    //
    // updatePoint(event) {
    //     console.log(event.target);
    // }
    //
    // rightMenuShowDetails() {
    //
    // }

    ngOnInit() {
        // this.getPoints();
    }
}