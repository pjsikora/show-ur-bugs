import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";
import {RouteParams} from 'angular2/router';

import {ProjectService} from '../project/index';
import {ViewService} from "../view/view.service";


@Component({
    bindings: [ProjectService, ViewService],
    template: `
        
        <div class="row">
        <p>project: {{id}}</p>
        <p>projectID: {{projectID}}</p>
        <p>projectName: {{projectName}}</p>
        </div>
        
         <ul>
            <li *ngFor="#view of viewsOfProject"><a href="/#/view/{{view._id}}">{{view.name}}</a></li>
        </ul>
    <!--createDate-->
    <!--createdBy-->
    <!--isOpened-->
    <!--isDeleted-->
    `
})

export class ProjectSingleComponent {
    id:string;
    project;
    projectID;
    projectName;

    viewsOfProject;

    constructor(params:RouteParams,
                public projectService:ProjectService,
                public viewService:ViewService) {
        this.id = params.get('id');
        console.log(this.id);
    }

    getViewsOfProject(id) {
        this.viewService.getViewsOfProject(id)
            .subscribe(
                data => {
                    this.viewsOfProject = data;
                    console.log(data);
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            );
    }


    getData(id) {
        this.projectService.getProject(id)
            .subscribe(
                data => {
                    this.project = data;
                    console.log(this.project);
                    console.log(this.project.name);

                    this.projectID = this.project._id;
                    this.projectName = this.project.name;

                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            );
    }

    ngOnInit() {
        this.getData(this.id);
        this.getViewsOfProject(this.id);
    }
}