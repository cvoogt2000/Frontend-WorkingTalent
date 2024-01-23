import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: any[] = [
    { startdate: '23-01-2024', enddate: '30-01-2024', product: 'Boek A', copy: '1', name: 'Tim Hammers', status: 'Missing'},
    { startdate: '22-01-2024', enddate: '30-01-2024', product: 'Boek B', copy: '2', name: 'Bas de Nice', status: 'Missing'},
    // Add more sample orders
  ];

  getOrders(): any[] {
    return this.orders;
  }
}
