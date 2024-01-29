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
  admin: any='';

  constructor(private orderService: OrderService) { }

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
      this.orders = data;
    });
  }
}
