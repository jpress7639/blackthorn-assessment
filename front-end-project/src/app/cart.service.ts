import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product, cartProductList } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    items: Product[] = [];
    quantity= 0;
    
  

  addToCart(product: Product) {
        this.items.push(product);
        this.quantity += 1;
        // cartProductList.quantity += number
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }

}