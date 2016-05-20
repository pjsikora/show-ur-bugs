System.register(['rxjs/add/operator/map', "angular2/core", "./view.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, view_service_1;
    var ProjectFormComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (view_service_1_1) {
                view_service_1 = view_service_1_1;
            }],
        execute: function() {
            ProjectFormComponent = (function () {
                function ProjectFormComponent(viewService) {
                    this.viewService = viewService;
                }
                ProjectFormComponent.prototype.onSubmit = function () {
                };
                ProjectFormComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h2></h2>\n\t\t<form (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <div class=\"medium-push-3 medium-6 columns\">\n              <label>View name\n                <input type=\"text\" placeholder=\"Project name\" ngControl=\"viewName\" [(ngModel)]=\"view.name\">\n              </label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"medium-push-3 medium-6 columns\">\n              <label>Description\n                <input type=\"text\" placeholder=\"Description\" ngControl=\"viewDescription\" [(ngModel)]=\"view.description\">\n              </label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"medium-push-3 medium-6 columns\">\n              <label>Description\n                <input type=\"text\" placeholder=\"Description\" ngControl=\"projectDescription\" [(ngModel)]=\"view.description\">\n              </label>\n            </div>\n          </div>\n        </form>\n\t"
                    }), 
                    __metadata('design:paramtypes', [view_service_1.ViewService])
                ], ProjectFormComponent);
                return ProjectFormComponent;
            })();
            exports_1("ProjectFormComponent", ProjectFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvdmlldy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9qZWN0Rm9ybUNvbXBvbmVudCIsIlByb2plY3RGb3JtQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvamVjdEZvcm1Db21wb25lbnQub25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkE2QklBLDhCQUFtQkEsV0FBdUJBO29CQUF2QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO2dCQUUxQ0EsQ0FBQ0E7Z0JBQ0RELHVDQUFRQSxHQUFSQTtnQkFFQUUsQ0FBQ0E7Z0JBbENMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxtL0JBeUJaQTtxQkFDREEsQ0FBQ0E7O3lDQVFEQTtnQkFBREEsMkJBQUNBO1lBQURBLENBbkNBLEFBbUNDQSxJQUFBO1lBbkNELHVEQW1DQyxDQUFBIiwiZmlsZSI6InZpZXcvdmlldy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHtWaWV3U2VydmljZX0gZnJvbSBcIi4vdmlldy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgXG5cdFx0PGgyPjwvaDI+XG5cdFx0PGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXB1c2gtMyBtZWRpdW0tNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5WaWV3IG5hbWVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgbmFtZVwiIG5nQ29udHJvbD1cInZpZXdOYW1lXCIgWyhuZ01vZGVsKV09XCJ2aWV3Lm5hbWVcIj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGl1bS1wdXNoLTMgbWVkaXVtLTYgY29sdW1uc1wiPlxuICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgbmdDb250cm9sPVwidmlld0Rlc2NyaXB0aW9uXCIgWyhuZ01vZGVsKV09XCJ2aWV3LmRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXB1c2gtMyBtZWRpdW0tNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBuZ0NvbnRyb2w9XCJwcm9qZWN0RGVzY3JpcHRpb25cIiBbKG5nTW9kZWwpXT1cInZpZXcuZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgUHJvamVjdEZvcm1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3U2VydmljZTpWaWV3U2VydmljZSkge1xuXG4gICAgfVxuICAgIG9uU3VibWl0KCkge1xuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
