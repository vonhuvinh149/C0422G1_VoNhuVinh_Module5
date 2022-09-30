import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {IProduct} from '../model/IProduct';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: IProduct[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  delete(id: number) {
    this.productService.getDeleteProduct(id);
  }
}
