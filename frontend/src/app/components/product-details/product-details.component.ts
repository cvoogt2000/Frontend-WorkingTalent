import { Component } from '@angular/core';
import { BookService } from '../../services/product/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  
  book: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void{
    let bookIdParam = this.route.snapshot.paramMap.get('id');
    // !! test of een string leeg is. 
    // Vanuit een URL krijg je een string terug als ID 
    // Daarom parseInt om hem in integer te krijgen
    if(!!bookIdParam) {
      this.bookService.getBookById(parseInt(bookIdParam)).subscribe(data => {
        this.book = data;
      });
    }
  }
}
