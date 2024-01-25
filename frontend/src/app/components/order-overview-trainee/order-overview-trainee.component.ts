import { Component, OnInit } from '@angular/core';
import { OrderService} from '../../services/order/order.service';

@Component({
  selector: 'app-order-overview-trainee',
  templateUrl: './order-overview-trainee.component.html',
  styleUrl: './order-overview-trainee.component.css'
})
export class OrderOverviewTraineeComponent implements OnInit{
  orders: any[] = [];
  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();

  }

}
