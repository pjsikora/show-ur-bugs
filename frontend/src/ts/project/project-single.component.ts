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
         <table>
            <tr *ngFor="#view of viewsOfProject">
                <td><a href="/#/view/{{view._id}}">{{view.name}}</a></td>
                <td><a href="" class="button alert">Delete</a></td>
                <td><a href="" class="button">Edit</a></td>
            </tr>
        </table>
        <div class="overlay" [style.display]="winVisible ? 'block' : 'none'">
            <div class="window">
                <h5>View details</h5>
                <a (click)="hideAddViewWindow()">Close</a>
                <form #myForm="ngForm" (ngSubmit)="createView()">
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
    id:string;
    users;
    project;
    projectID;
    projectName;
    winVisible = false;
    newView:ViewModel;
    ngForm;

    viewsOfProject;

    constructor(params:RouteParams,
                public projectService:ProjectService,
                public userService:UserService,
                public viewService:ViewService,
                public screenshotService:ScreenshotService) {
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
                }
            );
    }

    hideAddViewWindow() {
        this.winVisible = !this.winVisible;
    }

    showAddViewWindow() {
        this.winVisible = !this.winVisible;
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

    makeScreenshot() {

    }

    createView() {
        var screenshotObj = {
            url: this.newView.screenshotURL,
            projectID: this.id,
            file: 'sc'
        }

        this.screenshotService.make(screenshotObj).subscribe(
            data => {
                console.log(data);
            },
            error => console.error('Error: ' + error[0]),
            () => {

            }
        );

        // this.newView['projectID'] = this.id;
        // this.viewService.setView(this.newView).subscribe(
        //     data => {
        //         this.viewsOfProject.push(this.newView);
        //         this.winVisible = !this.winVisible;
        //     },
        //     error => console.error('Error: ' + error[0]),
        //     () => {
        //
        //     }
        // );
    }

    getData(id) {
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

        this.getData(this.id);
        this.getViewsOfProject(this.id);
        this.getUsers();
    }
}