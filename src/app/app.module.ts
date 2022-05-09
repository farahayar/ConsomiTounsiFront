import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './layouts/front-office/front-office.component';
import { BackOfficeComponent } from './layouts/back-office/back-office.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { HomeComponent } from './user/home/home.component';
import { NavBarComponent } from './user/layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './user/layouts/footer/footer.component';
import { ForumComponent } from './user/pages/forum/forum.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { SidebarComponent } from './admin/layouts/sidebar/sidebar.component';
import { NavBarBComponent } from './admin/layouts/nav-bar-b/nav-bar-b.component';
import { FooterBComponent } from './admin/layouts/footer-b/footer-b.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router'
import { FormulaireProductComponent } from './pages/formulaire-product/formulaire-product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { AdsComponent } from './pages/ads/ads.component';
import { AdsfrontComponent } from './user/pages/adsfront/adsfront.component';
import { ProductfrontComponent } from './user/pages/productfront/productfront.component';
import { DatePipe } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';







@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    BackOfficeComponent,
    SignInComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ForumComponent,
    DashboardComponent,
    SidebarComponent,
    NavBarBComponent,
    FooterBComponent,
    ProductsComponent,
    FormulaireProductComponent,
    ProductCategoryComponent,
    AdsComponent,
    AdsfrontComponent,
    ProductfrontComponent,
    
    
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    //BrowserAnimationsModule,
   // ToastrModule.forRoot(),
    
   
    
    
   
  ],
   exports: [
     FooterBComponent,
     NavBarBComponent,
     SidebarComponent,
     NavBarBComponent,
    FooterBComponent,
    DashboardComponent,
    RouterOutlet,
    BackOfficeComponent,
    FrontOfficeComponent,
   
   
 ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
