import { Component, OnInit } from '@angular/core';
import {RouteSegment} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-user-single',
  templateUrl: 'user-single.component.html',
  styleUrls: ['user-single.component.css']
})

export class UserSingleComponent implements OnInit {
  id;

  constructor(params:RouteSegment) {
    this.id = params.getParam('id');
    console.log(this.id);
  }

  getUserData() {
    var data = {};

    return data;
  }

  ngOnInit() {
  }

}
