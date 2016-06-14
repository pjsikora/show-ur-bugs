import 'rxjs/add/operator/map';
import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../shared";
import {ProjectListSingleComponent} from "./project/project-list-single.component";
import {FilterData} from "../../filter-data.pipe";

@Component({
    moduleId: module.id,
    bindings: [ProjectService],
    selector: 'app-project-list',
    templateUrl: 'project-list.component.html',
    styleUrls: ['project-list.component.css'],
    directives: [ProjectListSingleComponent],
    pipes: [FilterData]

})

export class ProjectListComponent implements OnInit {
    projects;

    constructor(public projectService:ProjectService) {

    }

    getProjects() {
        this.projectService.getProjects()
            .subscribe(
                data => {
                    this.projects = data;
                },
                error => console.error('Error: ' + error[0])
            )
    }

    ngOnInit() {
        this.getProjects();
    }

}