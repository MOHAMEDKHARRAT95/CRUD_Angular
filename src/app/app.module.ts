import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesModule } from './categories/categories.module';
import { ScategoriesModule } from './scategories/scategories.module';
import { NavescrollComponent } from './navescroll/navescroll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavescrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule,
    CategoriesModule,
    ScategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
