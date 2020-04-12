import { Component, OnInit } from '@angular/core';
import { Product } from 'src/api/products/product';
import { ProductService } from 'src/api/products/product.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
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
    return this.products.filter(product => product.productName.toLocaleLowerCase().includes(filterByLowercase));
  }

  filteredProducts: Product[];

  products: Product[];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  ngOnInit(): void {
    console.log("on init.");
  }

  public toggleImage(): void {
    console.log('toggled image');
    this.showImage = !this.showImage;
  }

  public onNotify(message: string): void {
    console.log("Notified by the star rating component.");
    this.pageTitle = "Product list: " + message;
  }
}
