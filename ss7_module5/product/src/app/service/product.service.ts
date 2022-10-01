import {Injectable} from '@angular/core';
import {IProduct} from '../model/IProduct';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/product');
  }

  getCreate(product: any) {
    return this.httpClient.post('http://localhost:3000/product', product);
  }

  getProductById(id: number):Observable<any> {
    return this.httpClient.get('http://localhost:3000/product/' + id);
  }

  getDeleteProduct(id: number) {
    return this.httpClient.delete("http://localhost:3000/product/"+id);
  }

  getUpdateProduct(product: any) {
   return this.httpClient.patch('http://localhost:3000/product/'+ product.id, product)
  }
}
