import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule } from '@angular/forms'
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from 'src/api/products/product.service';


@NgModule({
  declarations: [
    ViewerComponent,
    ConvertToSpaces,
    StarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ViewerComponent
  ],
})
export class ProductManagerModule { }
