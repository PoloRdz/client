import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  public title = 'Helpdesk';
  public user: User;
  public identity;
  public token;

  constructor(
    private userService: UserService
  ){
    this.user = new User('','','','','', false);
  }

  ngOnInit(): void {
    
  }

  doLogin(){
    this.userService.login(this.user).subscribe(
      response => {
        this.identity = response['user'];
        this.token = response['token'];
        console.log(this.identity);
        console.log(this.token);
        
        
      }, 
      error => {
        console.log(error);        
      }
    );
  }
}
