import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../models/user-credentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = undefined;
  redirectUrl: string;

  constructor (private http: HttpClient){

  }

  login(userCredentials : UserCredentials): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const observable = this.http.post('https://utn-avanzada2-tp-final.herokuapp.com/api/User/Login', userCredentials, httpOptions);

    observable.subscribe(
      response => {
      
      this.token = response['token'];
      localStorage.setItem('token', this.token);      
    },
      error => {
        
    })

    return observable;
  }

  logout(): void {
    this.token = undefined;
  }
}
