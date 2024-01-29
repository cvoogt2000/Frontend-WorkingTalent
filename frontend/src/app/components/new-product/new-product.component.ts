import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../../services/product/book.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  constructor (
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  newBookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: '',
    releaseDate: '',
    edition: '',
    isbnNumber: '',
    publisher: '',
    pageCount: '',
    relatedCourses: [[]],
    format: '',
    copies: [[]],
    tags: [[]]
  });

  submitNewBook(): void {
    const newBook = this.newBookForm.value;
    console.log(newBook);
    this.bookService.AddNewBook(newBook)
      .subscribe({
        next: () => {
          this.newBookForm.reset();
          alert("Product succesvol aangemaakt!");
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
  
}
