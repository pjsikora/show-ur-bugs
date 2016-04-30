import {Injectable} from 'angular2/core'
import {Http, Headers} from "angular2/http";

@Injectable()

export class ProjectService {
    serverUrl:string = '/points';
    headers = new Headers();

    constructor(public http: Http) {}

    private makeRequest(requestURL, object) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
            .map(response => response.json());
    }

    getProjects() {
        return this.makeRequest('/projects', {});
    }

    setProject(point) {
        return this.makeRequest('/projects/create', point);
    }

    updateProject(point, data) {
        return this.makeRequest('/projects/update', data);
    }

    removeProject(id) {
        return this.makeRequest('/projects/delete', id);
    }
}