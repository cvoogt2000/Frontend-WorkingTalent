import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  constructor(
    private http: HttpClient
  ) {}

  getAllCopies(): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/copy/all');
  }

  getCopyById(id: number): Observable<any> {
    return this.http.get(environment.BACKEND_URL + '/copy/' + id);
  }
}
