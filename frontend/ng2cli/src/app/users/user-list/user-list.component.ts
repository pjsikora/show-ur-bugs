import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared";

@Component({
  moduleId: module.id,
  bindings: [UserService],
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css']
})
export class UserListComponent implements OnInit {
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