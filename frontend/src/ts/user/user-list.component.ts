import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {UserService} from "./user.service";

@Component({
    // selector: 'my-app',
    bindings: [UserService],
    template: `
		<table>
            <thead>
                <tr>
                    <td>_id</td>
                    <td>login</td>
                    <td>email</td>
                    
                    <td>password</td>
                    <td>createDate</td>
                    <td>isDeleted</td>
                    <td>deleteDate</td>
                    
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#user of users">
                    <td>{{user._id}}</td>
                    <td>{{user.login}}</td>
                    <td>{{user.email}}</td>
                    
                    <td>{{user.password}}</td>
                    <td>{{user.createDate}}</td>
                    <td>{{user.isDeleted}}</td>
                    <td>{{user.deleteDate}}</td>
                    
                    
                <td><a href="" class="button alert">Delete</a></td>
                <td><a href="" class="button">Edit</a></td>
                </tr>
            </tbody>
        </table>
	`
})
export class UserListComponent {
    users;

    constructor(public userService:UserService) {

    }

    getViews() {
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
        this.getViews();
    }
}