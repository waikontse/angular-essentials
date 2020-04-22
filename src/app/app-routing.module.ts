import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './error/page-not-found.component';
import { ViewerComponent } from './product-manager/viewer/viewer.component';
import { ProductDetailComponent } from './product-manager/product-detail/product-detail.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ViewerComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
