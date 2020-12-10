import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/UserType'
  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }
  getById(id: Number): Promise<any> {
    return this.http.get(this.apiURL + "/" + id).toPromise();
  }
}
