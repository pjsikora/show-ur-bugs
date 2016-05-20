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
    var ViewService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ViewService = (function () {
                function ViewService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.viewsApiUrl = '/api/views/';
                    this.pointsApiUrl = '/api/points/';
                }
                ViewService.prototype.makeRequest = function (requestURL, object) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                ViewService.prototype.getViews = function () {
                    return this.makeRequest(this.viewsApiUrl, {});
                };
                ViewService.prototype.getViewsOfProject = function (id) {
                    return this.makeRequest(this.viewsApiUrl + 'read', { projectID: id });
                };
                ViewService.prototype.setView = function (point) {
                    return this.makeRequest(this.viewsApiUrl + 'create', point);
                };
                ViewService.prototype.updateView = function (point, data) {
                    return this.makeRequest(this.viewsApiUrl + 'update', data);
                };
                ViewService.prototype.removeView = function (id) {
                    return this.makeRequest(this.viewsApiUrl + 'delete', id);
                };
                ViewService.prototype.getPoints = function () {
                    return this.makeRequest('/api/points', {});
                };
                ViewService.prototype.setPoint = function (point) {
                    return this.makeRequest('/api/points/create', point);
                };
                ViewService.prototype.updatePoint = function (point, data) {
                    return this.makeRequest('/api/points/update', data);
                };
                ViewService.prototype.removePoint = function (id) {
                    return this.makeRequest('/api/points/delete', id);
                };
                ViewService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ViewService);
                return ViewService;
            })();
            exports_1("ViewService", ViewService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvdmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlZpZXdTZXJ2aWNlIiwiVmlld1NlcnZpY2UuY29uc3RydWN0b3IiLCJWaWV3U2VydmljZS5tYWtlUmVxdWVzdCIsIlZpZXdTZXJ2aWNlLmdldFZpZXdzIiwiVmlld1NlcnZpY2UuZ2V0Vmlld3NPZlByb2plY3QiLCJWaWV3U2VydmljZS5zZXRWaWV3IiwiVmlld1NlcnZpY2UudXBkYXRlVmlldyIsIlZpZXdTZXJ2aWNlLnJlbW92ZVZpZXciLCJWaWV3U2VydmljZS5nZXRQb2ludHMiLCJWaWV3U2VydmljZS5zZXRQb2ludCIsIlZpZXdTZXJ2aWNlLnVwZGF0ZVBvaW50IiwiVmlld1NlcnZpY2UucmVtb3ZlUG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQU9JQSxxQkFBbUJBLElBQVVBO29CQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtvQkFKN0JBLFlBQU9BLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLENBQUNBO29CQUN4QkEsZ0JBQVdBLEdBQUdBLGFBQWFBLENBQUNBO29CQUM1QkEsaUJBQVlBLEdBQUdBLGNBQWNBLENBQUNBO2dCQUVFQSxDQUFDQTtnQkFFekJELGlDQUFXQSxHQUFuQkEsVUFBb0JBLFVBQVVBLEVBQUVBLE1BQU1BO29CQUNsQ0UsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsY0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQzVCQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxjQUFjQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUVuREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsRUFBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsRUFBQ0EsQ0FBQ0E7eUJBQ3hFQSxHQUFHQSxDQUFDQSxVQUFBQSxRQUFRQSxJQUFJQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQUVERiw4QkFBUUEsR0FBUkE7b0JBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO2dCQUNsREEsQ0FBQ0E7Z0JBRURILHVDQUFpQkEsR0FBakJBLFVBQWtCQSxFQUFFQTtvQkFDaEJJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEdBQUNBLE1BQU1BLEVBQUVBLEVBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO2dCQUN0RUEsQ0FBQ0E7Z0JBRURKLDZCQUFPQSxHQUFQQSxVQUFRQSxLQUFLQTtvQkFDVEssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBQ0EsUUFBUUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlEQSxDQUFDQTtnQkFFREwsZ0NBQVVBLEdBQVZBLFVBQVdBLEtBQUtBLEVBQUVBLElBQUlBO29CQUNsQk0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxDQUFDQTtnQkFFRE4sZ0NBQVVBLEdBQVZBLFVBQVdBLEVBQUVBO29CQUNUTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFDQSxRQUFRQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQUVEUCwrQkFBU0EsR0FBVEE7b0JBQ0lRLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLGFBQWFBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO2dCQUMvQ0EsQ0FBQ0E7Z0JBRURSLDhCQUFRQSxHQUFSQSxVQUFTQSxLQUFLQTtvQkFDVlMsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDekRBLENBQUNBO2dCQUVEVCxpQ0FBV0EsR0FBWEEsVUFBWUEsS0FBS0EsRUFBRUEsSUFBSUE7b0JBQ25CVSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxvQkFBb0JBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUN4REEsQ0FBQ0E7Z0JBRURWLGlDQUFXQSxHQUFYQSxVQUFZQSxFQUFFQTtvQkFDVlcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQW5ETFg7b0JBQUNBLGlCQUFVQSxFQUFFQTs7Z0NBcURaQTtnQkFBREEsa0JBQUNBO1lBQURBLENBckRBLEFBcURDQSxJQUFBO1lBckRELHFDQXFEQyxDQUFBIiwiZmlsZSI6InZpZXcvdmlldy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBWaWV3U2VydmljZSB7XG4gICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgdmlld3NBcGlVcmwgPSAnL2FwaS92aWV3cy8nO1xuICAgIHBvaW50c0FwaVVybCA9ICcvYXBpL3BvaW50cy8nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHt9XG5cbiAgICBwcml2YXRlIG1ha2VSZXF1ZXN0KHJlcXVlc3RVUkwsIG9iamVjdCkge1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0VVJMLCBKU09OLnN0cmluZ2lmeShvYmplY3QpLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZ2V0Vmlld3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMudmlld3NBcGlVcmwsIHt9KTtcbiAgICB9XG5cbiAgICBnZXRWaWV3c09mUHJvamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCh0aGlzLnZpZXdzQXBpVXJsKydyZWFkJywge3Byb2plY3RJRDogaWR9KTtcbiAgICB9XG5cbiAgICBzZXRWaWV3KHBvaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMudmlld3NBcGlVcmwrJ2NyZWF0ZScsIHBvaW50KTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KHBvaW50LCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMudmlld3NBcGlVcmwrJ3VwZGF0ZScsIGRhdGEpO1xuICAgIH1cblxuICAgIHJlbW92ZVZpZXcoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QodGhpcy52aWV3c0FwaVVybCsnZGVsZXRlJywgaWQpO1xuICAgIH1cblxuICAgIGdldFBvaW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QoJy9hcGkvcG9pbnRzJywge30pO1xuICAgIH1cblxuICAgIHNldFBvaW50KHBvaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KCcvYXBpL3BvaW50cy9jcmVhdGUnLCBwb2ludCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9pbnQocG9pbnQsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QoJy9hcGkvcG9pbnRzL3VwZGF0ZScsIGRhdGEpO1xuICAgIH1cblxuICAgIHJlbW92ZVBvaW50KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KCcvYXBpL3BvaW50cy9kZWxldGUnLCBpZCk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
