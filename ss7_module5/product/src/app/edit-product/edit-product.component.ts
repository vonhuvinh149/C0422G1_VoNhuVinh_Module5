import {Component, OnInit} from '@angular/core';
import {IProduct} from '../model/IProduct';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: IProduct;
  updateForm: FormGroup ;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.productService.getProductById(parseInt(id)).subscribe(next => {
        this.product = next;
        this.updateForm = new FormGroup({
          id: new FormControl(this.product.id),
          productName: new FormControl(this.product.productName),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description)
        });
      });

    });
  }

  ngOnInit(): void {
  }


  onSubmitEdit() {
    console.log(this.updateForm.value);
    this.productService.getUpdateProduct(this.updateForm.value).subscribe(next => {
      this.router.navigateByUrl('');
    });

  }
}
