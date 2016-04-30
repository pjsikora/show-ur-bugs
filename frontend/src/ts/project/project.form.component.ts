import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";


@Component({
    template: `
		<h2></h2>
		<form (ngSubmit)="onSubmit()">
          <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>Project name
                <input type="text" placeholder="Project name" ngControl="projectName" [(ngModel)]="project.name">
              </label>
            </div>
        </div>
        <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>Description
                <input type="text" placeholder="Description" ngControl="projectDescription" [(ngModel)]="project.description">
              </label>
            </div>
          </div>
          <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>Description
                <input type="text" placeholder="Description" ngControl="projectDescription" [(ngModel)]="project.description">
              </label>
            </div>
          </div>
        </form>
	`
})
export class ProjectFormComponent {
    project;
    // constructor(public projectService:ProjectService) {
    constructor() {
        this.project.name;
        this.project.name;
    description
    onSubmit() {

    }
}