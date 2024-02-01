import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../../services/product/book.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  newBook: any = {};

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
    relatedCourses: '',
    format: '',
    copies: [[]],
    tags: [[]]
  });

  submitNewBook(buttonType: string): void {
    this.newBook = this.newBookForm.value;
    this.bookService.AddNewBook(this.newBook)
      .subscribe({
        next: (data) => {
          console.log('Product successfully assigned', data);
          if(buttonType === 'submitCatalogus') {
            window.location.replace("/catalogus");
          } else if (buttonType === 'submitExtra') {
            window.location.replace("/boek-nieuw");
          }
          this.newBookForm.reset();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  setSubmitButtonType(buttonType: string) {
    this.SubmitButtonType = () => this.submitNewBook(buttonType);
  }

  SubmitButtonType: () => void = this.submitNewBook.bind(this, 'defaultButtonType');

  
}
