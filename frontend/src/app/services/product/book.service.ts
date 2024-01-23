import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:8082/product/book';
  private apiUrlsearch = 'http://localhost:8082/product/book/title';
  private apiUrlsearchTag = 'http://localhost:8082/product/book/tag/name'

  constructor(
    private http: HttpClient
  ) {}

  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getBookByTitle(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlsearch}/${title}`);
  }

  getBookByTagName(tag: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlsearchTag}/${tag}`);
  }
  
}
