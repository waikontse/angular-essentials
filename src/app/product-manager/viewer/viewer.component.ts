import { Component, OnInit } from '@angular/core';
import { Product } from 'src/api/products/product';
import { ProductService } from 'src/api/products/product.service';

@Component({
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  providers: [ProductService]
})
export class ViewerComponent implements OnInit {
  filteredBy: string;
  pageTitle: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string;
  get listFilter() {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  private performFilter(filterBy: string): Product[] {
    const filterByLowercase = filterBy.toLocaleLowerCase();
    return this.products?.filter(product => product.productName.toLocaleLowerCase().includes(filterByLowercase));
  }

  filteredProducts: Product[];
  products: Product[];
  errorMessage: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  public toggleImage(): void {
      this.showImage = !this.showImage;
  }

  public onNotify(message: string): void {
    console.log("Notified by the star rating component.");
    this.pageTitle = "Product list: " + message;
  }
}
