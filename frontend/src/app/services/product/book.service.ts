import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) {}

  getAllBooks(): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/product/book/all');
  }
  
  getBookById(id: number): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/product/book/' + id);
  }

  getBookByTitle(title: string): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/product/book/title/' + title);
  }  

}
