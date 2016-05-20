System.register(['angular2/core', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ProjectService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ProjectService = (function () {
                function ProjectService(http) {
                    this.http = http;
                    this.serverUrl = '/api/projects/';
                    this.headers = new http_1.Headers();
                }
                ProjectService.prototype.makeRequest = function (requestURL, object) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                ProjectService.prototype.getProjects = function () {
                    return this.makeRequest(this.serverUrl, {});
                };
                ProjectService.prototype.getProject = function (id) {
                    return this.makeRequest(this.serverUrl + 'read', { id: id });
                };
                ProjectService.prototype.setProject = function (project) {
                    return this.makeRequest(this.serverUrl + 'create', project);
                };
                ProjectService.prototype.updateProject = function (project, data) {
                    return this.makeRequest(this.serverUrl + 'update', data);
                };
                ProjectService.prototype.removeProject = function (id) {
                    return this.makeRequest(this.serverUrl + 'delete', id);
                };
                ProjectService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProjectService);
                return ProjectService;
            })();
            exports_1("ProjectService", ProjectService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlByb2plY3RTZXJ2aWNlIiwiUHJvamVjdFNlcnZpY2UuY29uc3RydWN0b3IiLCJQcm9qZWN0U2VydmljZS5tYWtlUmVxdWVzdCIsIlByb2plY3RTZXJ2aWNlLmdldFByb2plY3RzIiwiUHJvamVjdFNlcnZpY2UuZ2V0UHJvamVjdCIsIlByb2plY3RTZXJ2aWNlLnNldFByb2plY3QiLCJQcm9qZWN0U2VydmljZS51cGRhdGVQcm9qZWN0IiwiUHJvamVjdFNlcnZpY2UucmVtb3ZlUHJvamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBTUlBLHdCQUFtQkEsSUFBVUE7b0JBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO29CQUg3QkEsY0FBU0EsR0FBVUEsZ0JBQWdCQSxDQUFDQTtvQkFDcENBLFlBQU9BLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLENBQUNBO2dCQUVRQSxDQUFDQTtnQkFFekJELG9DQUFXQSxHQUFuQkEsVUFBb0JBLFVBQVVBLEVBQUVBLE1BQU1BO29CQUNsQ0UsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsY0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQzVCQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxjQUFjQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUVuREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsRUFBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsRUFBQ0EsQ0FBQ0E7eUJBQ3hFQSxHQUFHQSxDQUFDQSxVQUFBQSxRQUFRQSxJQUFJQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQUVERixvQ0FBV0EsR0FBWEE7b0JBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO2dCQUNoREEsQ0FBQ0E7Z0JBRURILG1DQUFVQSxHQUFWQSxVQUFXQSxFQUFFQTtvQkFDVEksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBQ0EsTUFBTUEsRUFBRUEsRUFBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxDQUFDQTtnQkFFREosbUNBQVVBLEdBQVZBLFVBQVdBLE9BQU9BO29CQUNkSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFDQSxRQUFRQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDOURBLENBQUNBO2dCQUVETCxzQ0FBYUEsR0FBYkEsVUFBY0EsT0FBT0EsRUFBRUEsSUFBSUE7b0JBQ3ZCTSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQUVETixzQ0FBYUEsR0FBYkEsVUFBY0EsRUFBRUE7b0JBQ1pPLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEdBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO2dCQUN6REEsQ0FBQ0E7Z0JBbENMUDtvQkFBQ0EsaUJBQVVBLEVBQUVBOzttQ0FtQ1pBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7WUFuQ0QsMkNBbUNDLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNlIHtcbiAgICBzZXJ2ZXJVcmw6c3RyaW5nID0gJy9hcGkvcHJvamVjdHMvJztcbiAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7fVxuXG4gICAgcHJpdmF0ZSBtYWtlUmVxdWVzdChyZXF1ZXN0VVJMLCBvYmplY3QpIHtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QocmVxdWVzdFVSTCwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCh0aGlzLnNlcnZlclVybCwge30pO1xuICAgIH1cblxuICAgIGdldFByb2plY3QoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QodGhpcy5zZXJ2ZXJVcmwrJ3JlYWQnLCB7aWQ6IGlkfSk7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMuc2VydmVyVXJsKydjcmVhdGUnLCBwcm9qZWN0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9qZWN0KHByb2plY3QsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QodGhpcy5zZXJ2ZXJVcmwrJ3VwZGF0ZScsIGRhdGEpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QodGhpcy5zZXJ2ZXJVcmwrJ2RlbGV0ZScsIGlkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
