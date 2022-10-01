import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {IProduct} from '../model/IProduct';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: IProduct[];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(next => {
        this.products = next;
      }
    );
  }

  delete(id: number) {
    console.log(id);
   this.productService.getDeleteProduct(id).subscribe(next => {
     this.getAll();
  })
  }
}
