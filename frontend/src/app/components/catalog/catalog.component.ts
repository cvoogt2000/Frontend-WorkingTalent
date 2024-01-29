import { Component } from '@angular/core';
import { BookService } from '../../services/product/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent { 
  
  books: any[] = [];
  query: string = '';
  searchBooks: any[] = [];
  admin: string | null | undefined;

  constructor (
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      this.admin = localStorage.getItem("WT_ADMIN");
      this.getAllBooks();
    } else {
      //console.log('Localstorage is not available')
    }
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }

  resetQuery() {
    this.getAllBooks();
    this.query = '';
  }

  onSearch(): void {
    this.bookService.getBookByTitle(this.query).subscribe(data => {
      this.searchBooks = data;
      this.books = this.searchBooks;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { query: this.query }
      });
    });
  }
}
