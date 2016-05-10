import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {UserService} from "./user.service";

@Component({
    template: `
		
	`
})
export class ViewComponent {
    lsPoints;
    points;
    ding;

    constructor(public userService:UserService) {

    }
    
    ngOnInit() {
        // this.getPoints();
    }
}