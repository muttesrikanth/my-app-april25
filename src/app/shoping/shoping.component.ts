import { Component } from '@angular/core';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css'],
})
export class ShopingComponent {
  products: any = [
    { name: 'Laptop', price: 140000, rating: 4.0, delivery: true },
    { name: 'A.C', price: 30000, rating: 3.1, delivery: true },
    { name: 'Car', price: 1600000, rating: 3.2, delivery: true },
    { name: 'Bike', price: 190000, rating: 3.4, delivery: false },
    { name: 'T.V', price: 60000, rating: 2.4, delivery: false },
    { name: 'Fan', price: 7000, rating: 4.5, delivery: false },
    { name: 'Washing Machine', price: 50000, rating: 4.7, delivery: true },
    { name: 'Fridge', price: 140000, rating: 4.5, delivery: false },
    { name: 'Cooker', price: 6000, rating: 3.5, delivery: false },

  ];
  productAll = this.products;
  delete(i: any) {
    this.productAll.splice(i, 1);
  }

  plowtoheigh() {
    this.productAll = this.products.sort((a: any, b: any) => a.price - b.price);
  }
  pheightolow() {
    this.productAll = this.products.sort((a: any, b: any) => b.price - a.price);
  }
  rlowtoheigh() {
    this.productAll = this.products.sort(
      (a: any, b: any) => a.rating - b.rating
    );
  }
  rheightolow() {
    this.productAll = this.products.sort(
      (a: any, b: any) => b.rating - a.rating
    );
  }
  squery: string = '';
  search() {
    this.productAll = this.products.filter((p: any) =>
      p.name.includes(this.squery)
    );
  }
  name: string = '';
  price: number = 0;
  rating: number = 0;
  delivery: boolean = false;
  message = '';
  addtocart() {
    if (this.name === '' || this.price == 0 || this.rating == 0) {
      this.message = 'Fill all required details';
    } else {
      var oneProduct = {
        name: this.name,
        price: this.price,
        rating: this.rating,
        delivery: this.delivery,
      };
      this.products.push(oneProduct);
      this.productAll = this.products;
      this.name = '';
      this.price = 0;
      this.rating = 0;
      this.message = 'Item added success';
    }
  }
  applyDiscount() {
    this.productAll = this.products.map((pro: any) => {
      pro.price = Math.round(pro.price / 2);
      return pro;
    });
  }
  applyDelCharges() {
    this.productAll = this.products.map((pro: any) => {
      console.log(typeof pro.delivery);
      if (!pro.delivery) {
        pro.price = pro.price + 10;
      }
      return pro;
    });
  }
  freedelivery() {
    this.productAll = this.products.filter((p: any) => p.delivery == true);
  }
  totalprice() {
    var total = this.products.reduce(
      (acc: any, val: any) => acc + val.price,
      0
    );
    this.message = 'Total Price: ₹' + total;
  }
  totalItems() {
    this.message = 'Total items in cart: ' + this.productAll.length;
  }
}
