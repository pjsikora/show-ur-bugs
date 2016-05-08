import {Injectable} from 'angular2/core'
import {Http, Headers} from "angular2/http";

@Injectable()

export class ProjectService {
    serverUrl:string = '/api/projects/';
    headers = new Headers();

    constructor(public http: Http) {}

    private makeRequest(requestURL, object) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
            .map(response => response.json());
    }

    getProjects() {
        return this.makeRequest(this.serverUrl, {});
    }

    setProject(point) {
        return this.makeRequest(this.serverUrl+'create', point);
    }

    updateProject(point, data) {
        return this.makeRequest(this.serverUrl+'update', data);
    }

    removeProject(id) {
        return this.makeRequest(this.serverUrl+'delete', id);
    }
}