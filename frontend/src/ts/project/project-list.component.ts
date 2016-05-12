import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {ProjectService} from "./project.service";

@Component({
    bindings: [ProjectService],
    template: `
            <a class="button" href="/#/project/form">Add new project</a>
		<h2>Projects list</h2>
    <table>
        <thead>
            <tr>
                <!--<td>_id</td>-->
                <td>Project name</td>
                <td>createDate</td>
                <td>description</td>
                <td>createdBy</td>
                <td>isOpened</td>
                <td>isDeleted</td>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="#project of projects" class="project" >
                <!--<td>{{project._id}}</td>-->
                <td><a href="/#/project/{{project._id}}">{{project.name}}</a></td>
                <td>{{project.createDate}}</td>
                <td>{{project.description}}</td>
                <td>{{project.createdBy}}</td>
                <td>{{project.isOpened}}</td>
                <td>{{project.isDeleted}}</td>
                <td><a href="" class="button alert">Delete</a></td>
                <td><a href="" class="button">Edit</a></td>
            </tr>
        </tbody>
   </table>
	`
})
export class ProjectListComponent {
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