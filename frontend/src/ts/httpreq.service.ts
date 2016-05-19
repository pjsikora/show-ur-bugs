import {Injectable} from 'angular2/core'
import {Http, Headers} from "angular2/http";

@Injectable()

export class HTTPReq {
    headers = new Headers();
    api = '/api/';

    constructor(public http: Http) {}

    makeRequest(model, type, object) {
        var headers = new Headers(),
            requestURL = this.api + model + '/' + type;

        headers.append('Content-Type', 'application/json');

        return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
            .map(response => response.json());
    }

}