import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {UserService} from "./user.service";

@Component({
    template: `
		<h2></h2>
		<form (ngSubmit)="onSubmit()">
          <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>User name
                <input type="text" placeholder="Login" ngControl="viewName" [(ngModel)]="user.name">
              </label>
            </div>
        </div>
        <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>Password
                <input type="text" placeholder="Password" ngControl="viewDescription" [(ngModel)]="user.password">
              </label>
            </div>
          </div>
        </form>
	`
})
export class UserFormComponent {
    constructor(public userService:UserService) {

    }
    onSubmit() {

    }
}