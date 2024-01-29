import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { BookService } from '../../services/product/book.service';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderProductService } from '../../services/order-product/order-product.service';

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
    private orderProductService: OrderProductService
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

  AssignProduct(): void {
    this.orderProductService.AssignProductAsAdmin(
      this.AssignForm.controls.user.value,
      this.AssignForm.controls.book.value,
      this.AssignForm.controls.copy.value
    ).subscribe({
      next: (data) => {
        console.log('Product successfully assigned', data);
      },
      error: (error) => {
        console.log('Error assigning product', error);
      }
    });
  }

  onBookChange() {
    // Get the selected book ID from the form control
    const selectedBookId = this.AssignForm.get('book')?.value as unknown as number;
    this.bookService.getBookById(selectedBookId).subscribe( data => {
      this.Bookcopies = data;
      console.log(data);
    });
  }
}
