import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {User} from './user';
import {Observable} from "rxjs";
import {Repository} from "./repository";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  git_api = environment.apiUrl +'/users/' + environment.username;
  git_api_repo = this.git_api + '/repos';

  constructor(private http: HttpClient ) { }


  getUser(): Observable<User>{
    return this.http.get<User>(this.git_api);
  }
  getRepos() : Observable<Repository[]>{
    return this.http.get<Repository[]>(this.git_api_repo);
  }
}
