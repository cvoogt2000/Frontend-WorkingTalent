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
    return this.http.get(environment.BACKEND_URL + '/reservation/user/' + id);
  }

  AssignCopyToOrder(id: number, copyId: number): Observable<any> {
    return this.http.put(environment.BACKEND_URL + '/reservation/' + id + '/' + copyId, null);
  }

  ReturnOrder(id: number): Observable<any> {
    return this.http.put(environment.BACKEND_URL + '/reservation/' + id, null);
  }

  getBookOrderByTitle(title: string): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/reservation/title/' + title);
  }

  getOrderByName(firstname: string, lastname: string): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/reservation/name/' + firstname + lastname)
  }

  getAllReservedOrders(): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/reservation/reserved');
  }

  getAllLoanedOrders(): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/reservation/loaned');
  }

  getAllReturnedOrders(): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/reservation/returned');
  }

  
}
