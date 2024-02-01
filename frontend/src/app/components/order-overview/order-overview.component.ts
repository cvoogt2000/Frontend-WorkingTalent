import { Component } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { BookService } from '../../services/product/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CopyService } from '../../services/copy/copy.service';

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

  reservedOrders: any[] = [];
  loanedOrders: any[] = [];
  returnedOrders: any[] = [];

  activeTab: string = 'reserved';
  availableCopy: boolean = true;

  constructor(
    private orderService: OrderService,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private copyService: CopyService) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      this.admin = localStorage.getItem("WT_ADMIN");
      this.getAllOrders();
      this.getAllReserved();
      this.getAllLoaned();
      this.getAllReturned();
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
        //console.log(order.copies);
      });
    });
  }

  getCopiesForReservedOrders(): void {
    this.reservedOrders.forEach(order => {
      this.bookService.getBookById(parseInt(order.book?.id)).subscribe(data => {
        order.copies = data.copies;
        order.available = data.available;
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
          this.getAllReserved();
          this.getAllLoaned();
          this.getAllReturned();
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
        this.getAllReserved();
        this.getAllLoaned();
        this.getAllReturned();
        console.log('Order succesfully returned', data);
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

  getAllReserved(): void {
    this.orderService.getAllReservedOrders().subscribe(data => {
      if(data.book != '') {
        this.reservedOrders = data;
        this.getCopiesForReservedOrders();
      } else if(data.copy != '') {
        this.reservedOrders = data;
      };
    });
  }

  getAllLoaned(): void {
    this.orderService.getAllLoanedOrders().subscribe(data => {
      this.loanedOrders = data;
    });
  }

  getAllReturned(): void {
    this.orderService.getAllReturnedOrders().subscribe(data => {
      this.returnedOrders = data;
    });
  }


}
