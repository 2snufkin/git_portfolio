import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {GithubService} from "../github.service";
import {Repository} from "../repository";
import {map} from "rxjs/operators"

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repos$: Observable<Repository[]> | undefined;


  constructor(private gitHubService: GithubService) {
      }

  ngOnInit(): void {
   this.repos$ =  this.gitHubService.getRepos();
  }

}
