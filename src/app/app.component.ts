import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  public title = 'Helpdesk';
  public user: User;
  public identity;
  public token;

  constructor(
    private userService: UserService
  ){
    this.user = new User('','','','','', false);
  }

  doLogin(){
    this.userService.login(this.user).subscribe(
      response => {
        this.identity = response['user'];
        this.token = response['token'];
      }, 
      error => {
        console.log(error);
        
      }
    );
  }
}
