import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";
// import {CORE_DIRECTIVES} from "angular2/angular2";
import {RouteParams} from 'angular2/router';

import {ProjectService} from '../project/index';
import {ViewService} from "../view/view.service";
import {UserService} from "../user/user.service";
import {ViewModel} from "../view/view.model";

import {ScreenshotService} from "../screenshot/screenshot.service";


@Component({
    bindings: [ProjectService, ViewService, UserService, ScreenshotService],
    // directives: [CORE_DIRECTIVES],
    styles: [`
    .overlay { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0,0,0,.5)}
    .window { width: 400px; background: #fff; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; }
    `],
    template: `
        <h2>Project: {{id}}</h2>
        
        <p>project: {{id}}</p>
        <p>projectID: {{projectID}}</p>
        <p>projectName: {{projectName}}</p>
        <h4>Views</h4>
        
        <a class="button" (click)="showAddViewWindow()">Add View</a>
         
         <div *ngIf="viewsOfProject.length <= 0">
            <p>No views</p>
         </div>
            
         <table *ngIf="viewsOfProject.length > 0">
            <thead>
                <tr>
                    <th>name</th>
                    <th>isDeleted</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            <tr *ngFor="#view of viewsOfProject">
                <td><a href="/#/view/{{view._id}}">{{view.name}}</a></td>
                <td><a href="/#/view/{{view._id}}">{{view.isDeleted}}</a></td>
                <td><a href="" class="button alert" (click)="deleteProject($event)" data-id="">Delete</a></td>
                <td><a href="" class="button" (click)="editProject($event)">Edit</a></td>
            </tr>
            </tbody>
        </table>
        <div class="overlay" [style.display]="isWinVisible ? 'block' : 'none'">
            <div class="window">
                <h5>View details</h5>
                <a (click)="hideAddViewWindow()">Close</a>
                <form #myForm="ngForm" (ngSubmit)="createView()" [style.display]="!isFormWorking ? 'block' : 'none'">
                          <label>View name
                            <input type="text" placeholder="View name" ngControl="name" [(ngModel)]="newView.name">
                          </label>
                          <label>URL
                            <input type="text" placeholder="Screenshot URL" ngControl="screenshot" [(ngModel)]="newView.screenshotURL">
                          </label>
                          <label>Description
                            <textarea type="text" placeholder="Description" ngControl="description" [(ngModel)]="newView.description"></textarea>
                          </label>
                          
                            <select name="" id="" [(ngModel)]="newView.createdBy">
                            <option *ngFor="#user of users"  [value]="user._id">{{user.login}}</option>
                            </select>
                          <button class="button" type="submit" >Add view</button>
                    </form>
            </div>
        </div>
    `

})

export class ProjectSingleComponent {
    private id:string;
    private users;
    private project;
    private projectID;
    private projectName;
    private isFormWorking:Boolean = false;
    private isWinVisible:Boolean = false;
    private newView:ViewModel;
    ngForm;

    private viewsOfProject:Array = new Array();

    constructor(params:RouteParams,
                public projectService:ProjectService,
                public userService:UserService,
                public viewService:ViewService,
                public screenshotService:ScreenshotService) {

        this.id = params.get('id');
        console.log(this.id);
    }

    private getViewsOfProject(id) {
        this.viewService.getViewsOfProject(id)
            .subscribe(
                data => {
                    this.viewsOfProject = data;
                    console.log(data);
                },
                error => console.error('Error: ' + error[0]),
                () => {
                }
            );
    }

    private removeView() {

    }

    private hideAddViewWindow() {
        this.isWinVisible = !this.isWinVisible;
    }

    private showAddViewWindow() {
        this.isWinVisible = !this.isWinVisible;
    }

    getUsers() {
        this.userService.getUsers()
            .subscribe(
                data => {
                    this.users = data;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                }
            )
    }

    private createView() {
        // var screenshotObj = {
        //     url: this.newView.screenshotURL,
        //     projectID: this.id,
        //     file: 'sc'
        // }
        //
        // this.screenshotService.make(screenshotObj).subscribe(
        //     data => {
        //         console.log(data);
        //     },
        //     error => console.error('Error: ' + error[0]),
        //     () => {
        //
        //     }
        // );
        this.isFormWorking = true;
        this.newView['projectID'] = this.id;
        this.viewService.setView(this.newView).subscribe(
            data => {
                this.viewsOfProject.push(this.newView);
                this.isWinVisible = !this.isWinVisible;
                this.isFormWorking = false;
            },
            error => console.error('Error: ' + error[0]),
            () => {

            }
        );
    }

    private getProjectData(id) {
        this.projectService.getProject(id)
            .subscribe(
                data => {
                    this.project = data;
                    this.projectID = this.project._id;
                    this.projectName = this.project.name;
                },
                error => console.error('Error: ' + error[0]),
                () => {

                }
            );
    }

    ngOnInit() {
        this.newView = <ViewModel>{
            name: '',
            description: '',
            screenshotURL: ''
        };

        this.getProjectData(this.id);
        this.getViewsOfProject(this.id);
        this.getUsers();
    }
}