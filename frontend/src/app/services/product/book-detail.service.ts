import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {
  private apiUrl = 'https://isbnsearch.org/isbn';

  constructor(private http: HttpClient) { }

  getBookByIsbn(isbn: number): Observable<any> {
    const url = `${this.apiUrl}/${isbn}`;
    return this.http.get(url);
  }
}
