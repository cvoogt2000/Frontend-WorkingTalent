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
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    });
  }
}
