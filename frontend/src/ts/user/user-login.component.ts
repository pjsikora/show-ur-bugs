import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {UserService} from "./user.service";

@Component({
    bindings: [UserService],
    template: `
        <form>
        <div class="row">
            <div class="medium-push-3 medium-6 columns">
              <label>Login
                <input type="text" placeholder="Login" ngControl="userName" [(ngModel)]="user.name">
              </label>
              <label>Password
                <input type="text" placeholder="Password" ngControl="userPassword" [(ngModel)]="user.password">
              </label>
            </div>
        </div>
        </form>
		
	`
})
export class UserLoginComponent {
    users;

    constructor(public userService:UserService) {

    }

    login() {
        this.userService.getUsers()
            .subscribe(
                data => {
                    this.users = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }


    ngOnInit() {
    }
}