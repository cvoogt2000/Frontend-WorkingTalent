import { Component } from '@angular/core';
import { BookService } from '../../services/product/book.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { OrderProductService } from '../../services/order-product/order-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  
  book: any;
  //public userId: any = User.id;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private userService: UserService,
    private orderproductService: OrderProductService
  ) {}

  ngOnInit(): void{
    let bookIdParam = this.route.snapshot.paramMap.get('id');
    // !! test of een string leeg is. 
    // Vanuit een URL krijg je een string terug als ID 
    // Daarom parseInt om hem in integer te krijgen
    if(!!bookIdParam) {
      this.bookService.getBookById(parseInt(bookIdParam)).subscribe(data => {
        this.book = data;
        this.book.userId
      });
    }
  }

  OrderProduct(id: number): void {
    const userId =  3; //this.userId;

    this.orderproductService.orderProduct(userId, id).subscribe({
      next: (data) => {
        console.log('Product requested successfully', data);
      },
      error: (error) => {
        console.log('Error requesting product', error);
      }
    });
  }
}
