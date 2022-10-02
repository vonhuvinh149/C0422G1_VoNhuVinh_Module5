import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-update-new',
  templateUrl: './product-update-new.component.html',
  styleUrls: ['./product-update-new.component.css']
})
export class ProductUpdateNewComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,private router:Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category.id)
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('product/list/new');
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }

}
