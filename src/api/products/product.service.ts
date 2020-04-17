import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class ProductService {
  private productUrl: string = 'api/products/products.json'

  constructor(private httpClient: HttpClient) {
  }
 
  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), 
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';
    
    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      errorMsg = `Server returned code ${err.status}, error message is ${err.message}`;
    }

    console.log(errorMsg);
    return throwError(errorMsg);
  }
}