import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url;
  public identity;
  public token;

  constructor(
    private http: HttpClient
  ) { 
    this.url = 'http://localhost:3977/api/login';
  }

  login(user){
    let params = JSON.stringify(user);
    console.log(params);

    let headers = new HttpHeaders({'Content-Type':'application/jason'});

    return this.http.post(this.url, params, {headers : headers});
    
  }
}
