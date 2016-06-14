import {Component, OnInit} from '@angular/core';
import {ViewService} from "../shared";

@Component({
    moduleId: module.id,
    selector: 'app-view-list-component',
    templateUrl: 'view-list.component.html',
    styleUrls: ['view-list.component.css']
})


export class ViewListComponent {
    views;

    constructor(public viewService:ViewService) {

    }

    getViews() {
        this.viewService.getViews()
            .subscribe(
                data => {
                    // console.log(data);
                    this.views = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }

    ngOnInit() {
        // this.getViews();
    }
}

