// import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";
//
// import {ControlGroup} from "angular2/common";
// import {FormBuilder} from "angular2/common";
//
import {ProjectModel} from "./project.model";
import {ProjectService} from "./project.service";
import {UserService} from "../user/user.service";
//
@Component({
    template: `
		<h2></h2>
		<form #myForm="ngForm" (ngSubmit)="onSubmit()">
          <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>Project name
                <input type="text" placeholder="Project name" ngControl="name" [(ngModel)]="newProject.name" required>
              </label>
              <label>Description
                <textarea type="text" placeholder="Description" ngControl="description" [(ngModel)]="newProject.description" required></textarea>
              </label>
              
              <select name="" id="" [(ngModel)]="newProject.createdBy">
                <option *ngFor="#user of users"  [value]="user._id">{{user.login}}</option>
</select>
              <button class="button" type="submit" >Add project</button>
            </div>
        </div>
        </form>
	`,
    providers: [ProjectService, UserService]
})
//
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