import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: any[] = [
    
  ];

  getOrders(): any[] {
    return this.orders;
  }
}
