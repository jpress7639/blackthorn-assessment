import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products } from '../../product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products = Products;
  
    share() {
      window.alert('The product has been shared!');
    }

  ngOnInit(): void {
  }

}
