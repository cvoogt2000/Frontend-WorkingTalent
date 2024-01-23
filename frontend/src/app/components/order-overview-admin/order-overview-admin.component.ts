import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-order-overview-admin',
  templateUrl: './order-overview-admin.component.html',
  styleUrl: './order-overview-admin.component.css'
})
export class OrderOverviewAdminComponent implements OnInit{
  orders: any[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }
}
