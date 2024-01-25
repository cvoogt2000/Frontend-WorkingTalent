import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-overview-admin',
  templateUrl: './order-overview-admin.component.html',
  styleUrl: './order-overview-admin.component.css'
})
export class OrderOverviewAdminComponent implements OnInit{
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
