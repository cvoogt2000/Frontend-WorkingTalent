import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { BookService } from '../../services/product/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  books: any[] = [];

  inputTitle: string = "";

  constructor (
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  onKey(event: any) {this.inputTitle = event.target.value;}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }

  onClick(): void {
    this.getBooksByTitle(this.inputTitle);
  }

  getBooksByTitle(title: string): void {
    this.bookService.getBooksByTitle(title).subscribe(data => {
      this.books = data;
    });
  }
}
