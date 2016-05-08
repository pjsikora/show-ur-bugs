import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";
import {RouteConfig, Router, ROUTER_DIRECTIVES} from "angular2/router";

import {ViewComponent} from "./view/view.component";
import {ViewListComponent} from "./view/view.list.component";
import {ProjectComponent} from "./project/project.component";
import {ProjectListComponent} from "./project/project.list.component";
import {ProjectFormComponent} from "./project/project.form.component";


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
          <h1>Component Router</h1>
          <nav>
            <ul class="menu">
                <li>
                    <a [routerLink]="['View']">View</a>
                </li><li>
                    <a [routerLink]="['Views']">Views</a>
                </li>
                <li><a [routerLink]="['Projects']">Projects</a></li>
                <li><a [routerLink]="['ProjectForm']">Project form</a></li>
            </ul>
            
            
            
          </nav>
          <router-outlet></router-outlet>
`,
})
@RouteConfig([
    {path:'/view', name: 'View', component: ViewComponent},
    {path:'/views',        name: 'Views',       component: ViewListComponent},
    {path:'/projects',        name: 'Projects',       component: ProjectListComponent},
    {path:'/project/form',        name: 'ProjectForm',       component: ProjectFormComponent},
    // {path:'/points',      name: 'Point',   component: ViewUno}
])
export class AppComponent {
    constructor() {

    }
}
//<input type="text" [(ngModel)]="newPerson.name" (keyup.enter)="savePeople()">
//<button (click)="savePeople()">Save people</button>

//
// @Component({
//     template: `
// 		<h1>Project</h1>
// 	`
// })
// export class AppProject {
//     constructor(public appService:AppService) {
//         console.log('Route: Project');
//     }
// }
// @Component({
//     template: `
// 		<h1>View</h1>
// 	`
// })
// export class AppView {
//     constructor(public appService:AppService) {
//         console.log('Route: View');
//
//     }
// }