import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule } from '@angular/forms'
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ActivatedRoute } from '@angular/router'
import { AppRoutingModule } from '../app-routing.module'



@NgModule({
  declarations: [
    ViewerComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    ViewerComponent
  ],
})
export class ProductManagerModule { }
