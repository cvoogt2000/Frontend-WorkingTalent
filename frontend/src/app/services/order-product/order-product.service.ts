import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  constructor(
    private http: HttpClient
  ) { }

  orderProduct(userId: number, bookId: number): Observable<any> {
    //const orderData = { bookId, userId };
    const orderData = {
      bookId: bookId,
      userId: userId,
    }
    return this.http.post(environment.BACKEND_URL + '/reservation', orderData,  {})
  }

  AssignProductAsAdmin(userId: any, bookId: any, copyId: any): Observable<any> {
    const orderData = {
      bookId: bookId,
      userId: userId,
      copyId: copyId,
    }
    return this.http.post(environment.BACKEND_URL + '/reservation', orderData,  {})
  }
}
