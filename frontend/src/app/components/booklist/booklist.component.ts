import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {

  public books: any[] = [];

  constructor(private service: BookService) {
    this.loadAllBooks();
  }

  loadAllBooks() {
    this.service.getAllBooks().subscribe(books => {
      this.books = books;
    })
  }

}
