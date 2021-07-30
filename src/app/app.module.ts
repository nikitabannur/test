import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponent, ProductDescComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
