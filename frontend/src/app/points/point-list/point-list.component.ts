import 'rxjs/add/operator/map'

import {Component, OnInit} from '@angular/core';
import {PointService} from '../../shared';
import {FilterData} from "../../filter-data.pipe";

@Component({
    moduleId: module.id,
    bindings: [PointService],
    selector: 'app-point-list',
    templateUrl: 'point-list.component.html',
    styleUrls: ['point-list.component.css'],
    pipes: [FilterData]
})

export class PointListComponent implements OnInit {
    points;

    constructor(public pointService:PointService) {

    }

    getPoints() {
        this.pointService.getPoints()
            .subscribe(
                data => {
                    // console.log(data);
                    this.points = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }

    removePoint(e) {
        e.preventDefault();
        this.pointService.removePoint(e.currentTarget.dataset.id)
            .subscribe(
                data => {
                    // console.log(data);
                    this.points = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }


    ngOnInit() {
        this.getPoints();
    }
}