import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated/index';
import {
    ViewModel,
    ViewService,
    UserService,
    ProjectService
} from '../../shared';


@Component({
    moduleId: module.id,
    selector: 'app-project-single',
    templateUrl: 'project-single.component.html',
    styleUrls: ['project-single.component.css'],
    bindings: [ProjectService, ViewService, UserService]
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

    private viewsOfProject = new Array();

    constructor(params:RouteParams,
                public projectService:ProjectService,
                public userService:UserService,
                public viewService:ViewService) {

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