import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/Service/github.service';
import { error } from 'console';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  
   public githubUserQuery:string;
   public githubProfile:any;
   public githubRepos:any[];
   public errorMessage:string;

    
  constructor(private githubService:GithubService) { }
  
  public searchUser(){
    //to get the github profile
    this.githubService.getProfile(this.githubUserQuery).subscribe(next:(data) =>{
      this.githubProfile= data;
    }, error:(error) => {
      this.errorMessage =error;
    });
    
    
    //to get the github repos
    this.githubService.getRepos(this.githubUserQuery).subscribe(next:(data) =>{
      this.githubRepos=data;
    }, error:(error) => {
      this.errorMessage =error;

    });

  }

  ngOnInit(): void {
  }

}
