import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  private productUrl: string = 'api/products/products.json'

  constructor(private httpClient: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl);
  }
}