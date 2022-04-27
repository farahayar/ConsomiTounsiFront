import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { BackOfficeComponent } from './layouts/back-office/back-office.component';
import { FrontOfficeComponent } from './layouts/front-office/front-office.component';
import { AdsComponent } from './pages/ads/ads.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './user/home/home.component';
import { AdsfrontComponent } from './user/pages/adsfront/adsfront.component';
import { ForumComponent } from './user/pages/forum/forum.component';
import { ProductfrontComponent } from './user/pages/productfront/productfront.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: FrontOfficeComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'forum',
        component: ForumComponent
      },
      {
        path: 'adsF',
        component: AdsfrontComponent
      },
      {
        path: 'productF',
        component: ProductfrontComponent
      },
    ]
  },
  {
    path: 'admin',
    component: BackOfficeComponent,
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'produit',
        component: ProductsComponent
      },
      {
        path: 'pc',
        component: ProductCategoryComponent
      },
      {
        path: 'ads',
        component: AdsComponent
      },
      
      
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
