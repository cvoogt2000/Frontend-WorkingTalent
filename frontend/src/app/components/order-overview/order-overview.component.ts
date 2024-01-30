import { Component } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { BookService } from '../../services/product/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.css'
})
export class OrderOverviewComponent {
  orders: any[] = [];
  userOrders: any[] = [];
  admin: any='';
  BookIdOrder: any = '';
  copyId: any = null;

  queryTitle: string = '';
  queryFirstName: string = '';
  queryLastName: string = '';
  searchTitles: any[] = [];
  searchNames: any[] = [];

  constructor(
    private orderService: OrderService,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      this.admin = localStorage.getItem("WT_ADMIN");
      this.getAllOrders();
    } else {
      //console.log('Localstorage is not available')
    }
  }

  getAllOrders(): void {
    this.orderService.getAllOrders().subscribe( data => {
      //this.orders = data;
      if(data.book != '') {
        this.orders = data;
        this.getCopiesForOrders();
      } else if(data.copy != '') {
        this.orders = data;
      };
    });
  }

  getBookById(id: number): void {
    this.bookService.getBookById(id).subscribe( data => {
      this.BookIdOrder = data.copies;
    });
  }

  getCopiesForOrders(): void {
    this.orders.forEach(order => {
      this.bookService.getBookById(parseInt(order.book?.id)).subscribe(data => {
        order.copies = data.copies;
        //console.log(data.copies);
      });
    });
  }

  onSelectCopy(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.copyId = target.value;
  }


  OrderToLoan(id: number): void {
    if (this.copyId !== null) {
      this.orderService.AssignCopyToOrder(id, this.copyId).subscribe({
        next: (data) => {
          this.getAllOrders();
          console.log('Copy succesfully added to order', data);
        },
        error: (error) => {
          console.log('Error assigning copy', error);
        }
      });
    }
  }

  LoanToReturned(id: number): void {
    this.orderService.ReturnOrder(id).subscribe({
      next: (data) => {
        this.getAllOrders();
        console.log('Order succesfullu returned', data);
      },
      error: (error) => {
        console.log('Error returning order', error);
      }
    });

  }

  onSearchTitle(): void {
    this.orderService.getBookOrderByTitle(this.queryTitle).subscribe( data => {
      this.searchTitles = data;
      this.orders = this.searchTitles;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { queryTitle: this.queryTitle }
      });
    });
  }

  onSearchName(): void {
    this.orderService.getOrderByName(this.queryFirstName, this.queryLastName).subscribe( data => {
      this.searchNames = data;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { queryFirstName: this.queryFirstName, queryLastName: this.queryLastName}
      });
    });
  }

  resetQuery() {
    this.queryTitle = '';
    this.queryFirstName = '';
    this.queryLastName = '';
    this.getAllOrders();
  }

  updateOrder(id: number): void {
    this.orderService.getOrderById(id).subscribe(data => {
      this.orders = data;
    });
  }

}
