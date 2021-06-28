import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  products = Products;
  quantity = this.cartService.getItems()

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
  }

}
