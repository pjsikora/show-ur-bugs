import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()

export class ProjectService {
    serverUrl:string = '/api/projects/';
    headers = new Headers();

    constructor(public http:Http) {
    }

    private makeRequest(requestURL, object) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
            .map(response => response.json());
    }

    getProjects() {
        return this.makeRequest(this.serverUrl, {});
    }

    getProject(id) {
        return this.makeRequest(this.serverUrl + 'read', {id: id});
    }

    setProject(project) {
        return this.makeRequest(this.serverUrl + 'create', project);
    }

    updateProject(project, data) {
        return this.makeRequest(this.serverUrl + 'update', data);
    }

    removeProject(id) {
        return this.makeRequest(this.serverUrl + 'delete', id);
    }
}