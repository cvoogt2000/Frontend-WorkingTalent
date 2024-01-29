import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/reservation/all')
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/reservation/user/' + id)
  }

  
}
