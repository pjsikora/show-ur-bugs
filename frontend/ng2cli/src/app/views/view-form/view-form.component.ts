import 'rxjs/add/operator/map';
import {Component, OnInit} from '@angular/core';
import {ViewService} from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'app-view-form',
    templateUrl: 'view-form.component.html',
    styleUrls: ['view-form.component.css']
})
export class ViewFormComponent implements OnInit {

    constructor(public viewService:ViewService) {
    }

    ngOnInit() {
    }

}

