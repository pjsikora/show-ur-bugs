import {Injectable} from 'angular2/core'
import {Http, Headers} from "angular2/http";

@Injectable()

export class UserService {
    headers = new Headers();

    constructor(public http: Http) {}

    private makeRequest(requestURL, object) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
            .map(response => response.json());
    }

    getViews() {
        return this.makeRequest('/views', {});
    }

    setView(point) {
        return this.makeRequest('/views/create', point);
    }

    updateView(point, data) {
        return this.makeRequest('/views/update', data);
    }

    removeView(id) {
        return this.makeRequest('/views/delete', id);
    }

    getPoints() {
        return this.makeRequest('/points', {});
    }

    setPoint(point) {
        return this.makeRequest('/points/create', point);
    }

    updatePoint(point, data) {
        return this.makeRequest('/points/update', data);
    }

    removePoint(id) {
        return this.makeRequest('/points/delete', id);
    }

}