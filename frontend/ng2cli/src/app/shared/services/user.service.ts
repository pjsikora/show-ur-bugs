import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";


@Injectable()

export class UserService {
  headers = new Headers();
  apiUrl = '/api/users/';

  constructor(public http: Http) {}

  private makeRequest(requestURL, object) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(requestURL, JSON.stringify(object), {headers: headers})
        .map(response => response.json());
  }

  getUsers() {
    return this.makeRequest(this.apiUrl, {});
  }

  setUser(point) {
    return this.makeRequest(this.apiUrl+'create', point);
  }

  updateUser(point, data) {
    return this.makeRequest(this.apiUrl+'update', data);
  }

  removeUser(id) {
    return this.makeRequest(this.apiUrl+'delete', id);
  }

  login(userObject) {
    return this.makeRequest(this.apiUrl + 'login', userObject);
  }
}