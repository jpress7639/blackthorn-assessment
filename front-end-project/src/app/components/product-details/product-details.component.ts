import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products, Product } from '../../product';
import { CartService } from '../../cart.service';
import { ProviderAstType } from '@angular/compiler';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products = Products;
  name = Products.find(x => x.id === this.products.id)?.name

  //determine product by name 

  selectAmount(product: Product, value: string) {
    switch(value) {
    case "0":
      this.cartService.clearCart()
      break;
    case "1":
       this.cartService.addToCart(product, 1)
      break;
    case "2":
      this.cartService.addToCart(product, 2)
      break;
    case "3":
      this.cartService.addToCart(product, 3)
      break;
    }
}
constructor(
  private cartService: CartService,
  ) {}

  ngOnInit(): void {
  }

}
