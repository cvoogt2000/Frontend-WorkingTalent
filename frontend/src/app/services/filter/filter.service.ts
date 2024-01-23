import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  querySearch = new BehaviorSubject<string>('');

  query$ = this.querySearch.asObservable();

  constructor(
    private router: Router
  ) {}
  
  navigate(): void {
    this.router.navigate(['/catalogus'], {queryParams: {query:this.querySearch.getValue()}});
  }

  setQuery(query: string): void {
    this.querySearch.next(query);
  }
}
