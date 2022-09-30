import {Injectable} from '@angular/core';
import {IProduct} from '../model/IProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [{
    productId: 1,
    productName: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    productId: 2,
    productName: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    productId: 3,
    productName: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    productId: 4,
    productName: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    productId: 5,
    productName: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  getCreate(product: IProduct) {
    this.products.push(product);
  }

  getProductById(id: number) {
    return this.products.filter(w => w.productId == id)[0];
  }

  getDeleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productId == id) {
        this.products.splice(i, 1);
      }
    }
  }

  getUpdateProduct(product: IProduct) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productId == product.productId) {
        this.products[i] = product;
        break;
      }
    }
  }
}
