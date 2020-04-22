import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/api/products/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  public product: Product;

  public pageTitle: string = "Product Detail";


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GNS-0011',
      'description': "Leaf rake lkjdfkjwef kjwef",
      'price': 19.99,
      'starRating': 4.3,
      'imageUrl': 'assets/images/leaf_rake.png',
      'releaseDate': 'March 19 2019',
    }
  }

}
