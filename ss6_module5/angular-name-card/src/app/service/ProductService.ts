import {Product} from "../model/Product";

export class ProductService {

  public getProducts(){
    let products: Product[];

    products = [
      new Product(1,'memory card',233),
      new Product(2,'prn driven',533),
      new Product(3,'annie',733)
    ];
    return products;
  }
}
