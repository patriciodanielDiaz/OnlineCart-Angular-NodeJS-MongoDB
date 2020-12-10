import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/User'
  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }
  getById(id: Number): Promise<any> {
    return this.http.get(this.apiURL + "/" + id).toPromise();
  }

  login(e: string, p : string): Promise<any> {
    let data = {
      email: e,
      password: p,
    }
    console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.apiURL +"/Login", data, httpOptions).toPromise();
  }
}
