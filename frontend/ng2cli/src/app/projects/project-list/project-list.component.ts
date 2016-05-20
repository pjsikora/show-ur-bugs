import 'rxjs/add/operator/map';
import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../shared";
import {ProjectListSingleComponent} from "./project/project-list-single.component";

@Component({
    moduleId: module.id,
    bindings: [ProjectService],
    selector: 'app-project-list',
    templateUrl: 'project-list.component.html',
    styleUrls: ['project-list.component.css'],
    directives: [ProjectListSingleComponent]

})
export class ProjectListComponent implements OnInit {
    projects;

    constructor(public projectService:ProjectService) {

    }

    getProjects() {
        this.projectService.getProjects()
            .subscribe(
                data => {
                    // console.log(data);
                    this.projects = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }

    ngOnInit() {
        this.getProjects();
    }

}