import { StarComponent } from './shared/star.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { DashToSpacesPipe } from './pipes/dash-to-spaces.pipe';

@NgModule({
  // declare which of our components belong to this module
  declarations: [
    AppComponent,
    ProductListComponent,
    DashToSpacesPipe,
    StarComponent
  ],
  // external modules that we want to have available to all of the components
  // that belong to this module
  imports: [
    BrowserModule,
    FormsModule
  ],
  // start up component of the application. This component should contain the
  // selector we use in the index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
