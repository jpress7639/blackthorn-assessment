import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Products } from 'src/app/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product = Products;
  
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    first: '',
    last: '',
    email: ''
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  ngOnInit(): void {
  }

}
