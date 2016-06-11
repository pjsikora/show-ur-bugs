import {Component, OnInit} from '@angular/core';
import {UserService, UserModel} from "../../shared/index";

@Component({
    moduleId: module.id,
    providers: [UserService],
    selector: 'app-user-form',
    templateUrl: 'user-form.component.html',
    styleUrls: ['user-form.component.css']
})
export class UserFormComponent implements OnInit {
    newUser:UserModel;

    constructor(public userService:UserService) {

    }

    onSubmit(e) {
        console.log("User Submit");
        console.log(this.newUser);
        this.userService.setUser(this.newUser).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.error('error' + error[0])
            },
            () => {

            }
        )
    }


    ngOnInit() {
        this.newUser = <UserModel>{
            login: '',
            email: '',
            password: ''
        };
    }

}
