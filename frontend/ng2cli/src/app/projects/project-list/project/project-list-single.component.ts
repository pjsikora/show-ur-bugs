import 'rxjs/add/operator/map';
import {Component, Input, OnInit} from '@angular/core';
// import {ProjectService} from "../../../shared";

@Component({
    moduleId: module.id,
    selector: 'project-list-single',
    templateUrl: 'project-list-single.component.html',
    styleUrls: ['project-list-single.component.css']
})

export class ProjectListSingleComponent implements OnInit {
    @Input('project') project;
    isVisible;

    constructor() {

    }
    showDetails(e) {
        e.preventDefault();
        this.isVisible = !this.isVisible;
    }

    removeProject(e) {
        e.preventDefault();
        console.log("remove");
    }

    editProject(e) {
        e.preventDefault();
        console.log("edit");
    }

    closeProject(e) {
        e.preventDefault();
        console.log("close");
    }
    openProject(e) {
        e.preventDefault();
        console.log("open");
    }

    ngOnInit() {
    }

}