import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {User} from './user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  api = environment.apiUrl;
  username = environment.username;
  constructor(private http: HttpClient ) { }


  getUser(): Observable<User>{
    return this.http.get<User>(`${this.api}/users/${this.username}`);
  }
}
