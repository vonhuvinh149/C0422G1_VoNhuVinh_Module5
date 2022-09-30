import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-producy',
  templateUrl: './create-producy.component.html',
  styleUrls: ['./create-producy.component.css']
})
export class CreateProducyComponent implements OnInit {
  product: FormGroup;

  constructor(private productService: ProductService, private router: Router) {
    this.product = new FormGroup({
      productId: new FormControl(),
      productName: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.product.value);
    this.productService.getCreate(this.product.value);
    this.router.navigateByUrl('');
  }
}
