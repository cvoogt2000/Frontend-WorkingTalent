import { Component } from '@angular/core';
import { BookService } from '../../services/product/book.service';
import { FilterService } from '../../services/filter/filter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent { 
  
  books: any[] = [];
  query: string = '';

  constructor (
    private bookService: BookService,
    private filterService: FilterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.getAllBooks();

    this.query = this.filterService.querySearch.getValue();

    this.route.queryParams.subscribe(params => {
      if (this.router.url === '/catalogus') {
        this.resetQuery();
      }
      this.query = params['query'];
    });
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }

  resetQuery() {
    this.query = "";
  }

  onSearch() {
    this.filterService.setQuery(this.query);
    this.filterService.navigate();
  }
}
