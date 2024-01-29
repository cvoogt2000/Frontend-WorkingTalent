import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  constructor (
    private formBuilder: FormBuilder
  ) {}

  newBookForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  
}
