import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {ViewService} from "./view.service";

@Component({
    template: `
		<h2></h2>
		<form (ngSubmit)="onSubmit()">
          <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>View name
                <input type="text" placeholder="Project name" ngControl="viewName" [(ngModel)]="view.name">
              </label>
            </div>
        </div>
        <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>Description
                <input type="text" placeholder="Description" ngControl="viewDescription" [(ngModel)]="view.description">
              </label>
            </div>
          </div>
          <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>Description
                <input type="text" placeholder="Description" ngControl="projectDescription" [(ngModel)]="view.description">
              </label>
            </div>
          </div>
        </form>
	`
})
export class ProjectFormComponent {
    constructor(public viewService:ViewService) {

    }
    onSubmit() {

    }
}