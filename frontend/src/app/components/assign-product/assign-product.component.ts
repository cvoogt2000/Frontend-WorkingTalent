import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { BookService } from '../../services/product/book.service';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderProductService } from '../../services/order-product/order-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-product',
  templateUrl: './assign-product.component.html',
  styleUrl: './assign-product.component.css'
})
export class AssignProductComponent {
  users: any[] = [];
  books: any[] = [];
  Bookcopies: any;

  AssignForm = this.formBuilder.group({
    user: [null, Validators.required],
    book: [null, Validators.required],
    copy: [null, Validators.required]
  })

  constructor(
    private userService: UserService,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private orderProductService: OrderProductService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.getAllUsers();
    this.getAllBooks();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }

  AssignProduct(buttonType: string): void {
    this.orderProductService.AssignProductAsAdmin(
      this.AssignForm.controls.user.value,
      this.AssignForm.controls.book.value,
      this.AssignForm.controls.copy.value
    ).subscribe({
      next: (data) => {
        console.log('Product successfully assigned', data);
        if(buttonType === 'submitBestel') {
          window.location.replace("/besteloverzicht");
        } else if (buttonType === 'submitToewijzen') {
          window.location.replace("/boek-toewijzen");
        }
      },
      error: (error) => {
        console.log('Error assigning product', error);
      }
    });
  }

  setSubmitButtonType(buttonType: string) {
    this.SubmitButtonType = () => this.AssignProduct(buttonType);
  }

  SubmitButtonType: () => void = this.AssignProduct.bind(this, 'defaultButtonType');
  
  
  onBookChange() {
    // Get the selected book ID from the form control
    const selectedBookId = this.AssignForm.get('book')?.value as unknown as number;
    this.bookService.getBookById(selectedBookId).subscribe( data => {
      this.Bookcopies = data.copies;
    });
  }
}
