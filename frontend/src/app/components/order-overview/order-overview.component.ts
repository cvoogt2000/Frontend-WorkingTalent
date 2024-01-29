import { Component } from '@angular/core';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.css'
})
export class OrderOverviewComponent {
  orders: any[] = [];
  userOrders: any[] = [];
  admin: string | null | undefined;
  userID: any = '';

  constructor(
    private orderService: OrderService) {}

  ngOnInit(): void {
    this.admin = localStorage.getItem("WT_ADMIN");
    this.userID = localStorage.getItem("WT_USERID");

    if (this.admin == 'true') {
      this.getAllOrders();
    } else {
      this.getOrderById(parseInt(this.userID));
    }
  }

  getAllOrders(): void {
    this.orderService.getAllOrders().subscribe( data => {
      this.orders = data;
    });
  }

  getOrderById(id: number): void {
    this.orderService.getOrderById(id).subscribe(data => {
      this.orders = data;
    })
  }
}
