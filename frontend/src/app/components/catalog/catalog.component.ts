import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent { 
  
  books: any[] = [];


  constructor (
    private productService: ProductService
  ) {}
  
  ngOninit(): void {
    this.getAllBooks();
  }
  
  getAllBooks(): void {
    this.productService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }
}
