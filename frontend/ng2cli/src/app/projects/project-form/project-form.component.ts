import {Component, OnInit} from '@angular/core';

import {ProjectModel, ProjectService, UserService} from "../../shared";


@Component({
    moduleId: module.id,
    providers: [ProjectService, UserService],
    selector: 'app-project-form',
    templateUrl: 'project-form.component.html',
    styleUrls: ['project-form.component.css']
})



export class ProjectFormComponent implements OnInit {
    newProject:ProjectModel;
    users;

    constructor(public projectService:ProjectService,
                public userService:UserService) {
    }

//
    onSubmit() {
        console.log('Submit');
        console.log(this.newProject);
        // this.newProject.createdBy = '5728620832237db8158e161e';

        this.projectService.setProject(this.newProject).subscribe(
            data => {
                console.log(data);
                // this.lsPoints = this.points;
            },
            error => console.error('Error: ' + error[0]),
            () => {
                // console.log("Data loaded!")
            }
        )
    }

    loadUsers() {
        this.userService.getUsers().subscribe(
            data => {
                console.log(data);
                this.users = data;
            },
            error => console.error('Error: ' + error[0]),
            () => {
                // console.log("Data loaded!")
            }
        )
    }

//
    ngOnInit() {
        this.loadUsers();
        this.newProject = <ProjectModel>{
            name: '',
            description: ''
        };

    }
}