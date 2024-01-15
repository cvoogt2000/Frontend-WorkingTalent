import { Component } from '@angular/core';
import { BookService } from '../../services/product/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent { 
  
  books: any[] = [];

  constructor (
    private bookService: BookService
  ) {}
  
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }
}
