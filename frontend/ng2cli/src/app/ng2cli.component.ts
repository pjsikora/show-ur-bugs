import {Component} from '@angular/core';
// import {Router, ROUTER_DIRECTIVES, Routes} from "@angular/router";
// import {RouteParams, RouteConfig, ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {ViewListComponent} from './views/view-list.component';
import {ViewSingleComponent} from './views/view-single/index';
import {UserListComponent} from './users/user-list/index';
import {PointListComponent} from './points/point-list/index';
import {ProjectListComponent, ProjectFormComponent, ProjectSingleComponent} from './projects/index';

@Component({
    moduleId: module.id,
    selector: 'ng2cli-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'ng2cli.component.html',
    styleUrls: ['ng2cli.component.css']
})

@Routes([
    {path: '/view/:id', component: ViewSingleComponent},
    {path: '/views', component: ViewListComponent},
    {path: '/users', component: UserListComponent},
    {path: '/points', component: PointListComponent},
    {path: '/projects', component: ProjectListComponent},
    {path: '/project/:id', component: ProjectSingleComponent},
    {path: '/project/form', component: ProjectFormComponent}
])

// @RouteConfig([
//   {path:'/view/:id', name: 'View', component: ViewSingleComponent},
//   // {path:'/view:id', name: 'View', component: ViewComponent},
//   {path:'/views',        name: 'Views',       component: ViewListComponent},
//   {path:'/users',        name: 'Users',       component: UserListComponent},
//   {path:'/points',        name: 'Points',       component: PointListComponent},
//   {path:'/projects',        name: 'Projects',       component: ProjectListComponent},
//   {path:'/project/:id',        name: 'ProjectsSingle',       component: ProjectSingleComponent},
//   {path:'/project/form',        name: 'ProjectForm',       component: ProjectFormComponent},
// ])
export class Ng2cliAppComponent {
    title = 'ng2cli works!';

    constructor(public router:Router) {

    }

    ngOnInit() {}
}
