import {Injectable} from 'angular2/core'
import {Http, Headers} from "angular2/http";

@Injectable()

export class PointService {
    headers = new Headers();
    apiUrl = '/api/points/';

    
    constructor(public http: Http) {}

    private makeRequest(requestURL, object) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
            .map(response => response.json());
    }

    getPoints() {
        return this.makeRequest(this.apiUrl, {});
    }

    getPointsOfView(viewID) {
        return this.makeRequest(this.apiUrl+'read', {viewID: viewID});
    }

    setPoint(point) {
        return this.makeRequest(this.apiUrl+'create', point);
    }

    updatePoint(point, data) {
        return this.makeRequest(this.apiUrl+'update', data);
    }

    removePoint(id) {
        return this.makeRequest(this.apiUrl+'delete', id);
    }

    // makeRequest(model, type, object) {
    //     var headers = new Headers(),
    //         requestURL = model + '/' + type;
    //     headers.append('Content-Type', 'application/json');
    //
    //
    //     return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
    //         .map(response => response.json());
    // }

}