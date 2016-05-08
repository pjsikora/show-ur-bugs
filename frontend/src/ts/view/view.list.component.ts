import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {ViewService} from "./view.service";

@Component({
    // selector: 'my-app',
    bindings: [ViewService],
    template: `
		<table>
            <thead>
                <tr>
                    <td>View name</td>
                    <td>screenshotURL</td>
                    <td>description</td>
                    <td>projectID</td>
                    <td>createDate</td>
                    <td>createdBy</td>
                    <td>isOpened</td>
                    <td>isDeleted</td>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#view of views">
                    <td>{{view.name}}</td>
                    <td>{{view.screenshotURL}}</td>
                    <td>{{view.description}}</td>
                    <td>{{view.projectID}}</td>
                    <td>{{view.createDate}}</td>
                    <td>{{view.createdBy}}</td>
                    <td>{{view.isOpened}}</td>
                    <td>{{view.isDeleted}}</td>
                </tr>
            </tbody>
        </table>
	`
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
        this.getViews();
    }
}