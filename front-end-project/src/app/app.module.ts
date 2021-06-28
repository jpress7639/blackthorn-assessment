import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule, Routes, Route } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    CartComponent,
    OrdersummaryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
