import 'rxjs/add/operator/map';
import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../../shared";

@Component({
    moduleId: module.id,
    selector: 'project-list-single',
    templateUrl: 'project-list-single.component.html',
    styleUrls: ['project-list-single.component.css']
})

export class ProjectListSingleComponent implements OnInit {
    @Input('project') project;
    public isVisible:boolean;
    public id:string;


    constructor(public projectService:ProjectService) {

    }
    showDetails(e) {
        e.preventDefault();
        this.isVisible = !this.isVisible;
    }

    removeProject(e) {
        e.preventDefault();
        console.log("remove");

        this.projectService.removeProject(this.id)
            .subscribe(
                data => {
                    // console.log(data);
                    // this.projects = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }

    editProject(e) {
        e.preventDefault();
        console.log("edit "+this.id);
    }

    closeProject(e) {
        e.preventDefault();
        console.log("close "+this.id);

        this.projectService.removeProject(this.id)
            .subscribe(
                data => {
                    // console.log(data);
                    // this.projects = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }

    openProject(e) {
        e.preventDefault();
        console.log("open");

        this.projectService.removeProject(this.id)
            .subscribe(
                data => {
                    // console.log(data);
                    // this.projects = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }

    ngOnInit() {
        this.id = this.project._id;
        console.log(this.project._id);
    }

}