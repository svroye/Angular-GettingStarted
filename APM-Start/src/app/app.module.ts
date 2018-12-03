import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  // declare which of our components belong to this module
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  // external modules that we want to have available to all of the components
  // that belong to this module
  imports: [
    BrowserModule
  ],
  // start up component of the application. This component should contain the
  // selector we use in the index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
