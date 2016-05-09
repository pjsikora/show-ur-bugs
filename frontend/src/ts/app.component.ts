import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";
import {RouteConfig, Router, ROUTER_DIRECTIVES} from "angular2/router";

import {ViewComponent} from "./view/view.component";

import {UserListComponent} from "./user/user.list.component";

import {ViewListComponent} from "./view/view.list.component";

import {PointListComponent} from "./point/point.list.component";

import {
    ProjectComponent,
    ProjectSingleComponent,
    ProjectListComponent,
    ProjectFormComponent
    } from "./project/index";


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
          <nav>
            <ul class="menu">
                <li>
                    <a [routerLink]="['View']">View</a>
                </li>
                <li>
                    <a [routerLink]="['Views']">Views</a>
                </li>
                <li>
                    <a [routerLink]="['Users']">Users</a>
                </li>
                <li>
                    <a [routerLink]="['Points']">Points</a>
                </li>
                <li>
                    <a [routerLink]="['Projects']">Projects</a>
                </li>
                <li>
                    <a [routerLink]="['ProjectForm']">Project form</a>
                </li>
            </ul>
          </nav>
          <router-outlet></router-outlet>
`,
})
@RouteConfig([
    {path:'/view', name: 'View', component: ViewComponent},
    // {path:'/view:id', name: 'View', component: ViewComponent},
    {path:'/views',        name: 'Views',       component: ViewListComponent},
    {path:'/users',        name: 'Users',       component: UserListComponent},
    {path:'/points',        name: 'Points',       component: PointListComponent},
    {path:'/projects',        name: 'Projects',       component: ProjectListComponent},
    {path:'/project/:id',        name: 'ProjectsSingle',       component: ProjectSingleComponent},
    {path:'/project/form',        name: 'ProjectForm',       component: ProjectFormComponent},
    // {path:'/points',      name: 'Point',   component: ViewUno}
])
export class AppComponent {
    constructor() {

    }
}