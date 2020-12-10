import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/Product';
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }
  getById(id: Number): Promise<any> {
    return this.http.get(this.apiURL + "/" + id).toPromise();
  }

  delete(id: Number): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': 'Bearer '+ this.authService.token
      })
    };
    
    return this.http.delete(this.apiURL + "/" + id, httpOptions)
      .toPromise();
  }
  addProduct(product: Product): Promise<any> {
   
    //console.log(product);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.authService.token
      })
    };

    return this.http.post(this.apiURL, product, httpOptions).toPromise();
  }
}
