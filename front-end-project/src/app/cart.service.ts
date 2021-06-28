import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product, cartProductList } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    items: Product[] = [];
    quantity = 0;
    
  

  addToCart(product: Product, amount: number) {
        this.items.push(product);
        this.quantity = amount;
    }
  
    getItems() {
      return this.items, this.quantity;
    }
  
    clearCart() {
      this.items = [];
      this.quantity = 0;
      return this.items;
    }

}