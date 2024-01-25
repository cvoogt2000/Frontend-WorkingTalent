import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  private apiUrl = 'http://localhost:8082/reservation'

  constructor(
    private http: HttpClient
  ) { }

  orderProduct(userId: number, bookId: number): Observable<any> {
    //const orderData = { bookId, userId };
    const orderData = {
      bookId: bookId,
      userId: userId,
    }
    return this.http.post(`${this.apiUrl}`, orderData,  {})
  }
}
