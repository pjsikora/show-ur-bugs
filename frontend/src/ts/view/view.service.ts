import {Injectable} from 'angular2/core'
import {Http, Headers} from "angular2/http";

@Injectable()

export class ViewService {
    headers = new Headers();
    viewsApiUrl = '/api/views/';
    pointsApiUrl = '/api/points/';

    constructor(public http: Http) {}

    private makeRequest(requestURL, object) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
            .map(response => response.json());
    }

    getViews() {
        return this.makeRequest(this.viewsApiUrl, {});
    }

    getViewsOfProject(id) {
        return this.makeRequest(this.viewsApiUrl+'read', {_id: id});
    }

    setView(point) {
        return this.makeRequest(this.viewsApiUrl+'create', point);
    }

    updateView(point, data) {
        return this.makeRequest(this.viewsApiUrl+'update', data);
    }

    removeView(id) {
        return this.makeRequest(this.viewsApiUrl+'delete', id);
    }

    getPoints() {
        return this.makeRequest('/api/points', {});
    }

    setPoint(point) {
        return this.makeRequest('/api/points/create', point);
    }

    updatePoint(point, data) {
        return this.makeRequest('/api/points/update', data);
    }

    removePoint(id) {
        return this.makeRequest('/api/points/delete', id);
    }

}