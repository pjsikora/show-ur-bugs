import {Injectable} from 'angular2/core'
import {Http, Headers} from "angular2/http";

@Injectable()

export class ScreenshotService {
    headers = new Headers();
    apiUrl = '/api/screenshots/';

    constructor(public http: Http) {}

    private makeRequest(requestURL, object) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
            .map(response => response.json());
    }

    make(obj) {
        return this.makeRequest(this.apiUrl+'create', obj);
    }

    read(id) {
        return this.makeRequest(this.apiUrl+'read', {projectID: id});
    }
}