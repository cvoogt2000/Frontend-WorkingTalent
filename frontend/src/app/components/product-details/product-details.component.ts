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
  storedQuery: any;
  userId: any='';
  

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
      });
    }

    // Remember and navigate back with the same query
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['query']) {
        // Store the query in a variable or service to use later
        this.storedQuery = queryParams['query'];
      } 
    });
  }

  OrderProduct(id: number): void {
    this.userId = localStorage.getItem("WT_USERID");
    
    this.orderproductService.orderProduct(parseInt(this.userId), id).subscribe({
      next: (data) => {
        console.log('Product requested successfully', data);
        window.location.replace("/besteloverzicht");
      },
      error: (error) => {
        console.log('Error requesting product', error);
      }
    });
  }

  removeQuotesUsingReplace(str: string): string {
    if (str === null) {
      return str;
    } else {
      return str.replace(/['"]+/g, '');
    }    
  }

  // removeBlockUsingReplace(str: string): string {
  //   return str.replace(/[[]]+/g, '');
  // }
}
