import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondphaseComponent } from './secondphase/secondphase.component';
import { ThirdphaseComponent } from './thirdphase/thirdphase.component';
import { FourthphaseComponent } from './fourthphase/fourthphase.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';
import { LastComponent } from './last/last.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondphaseComponent,
    ThirdphaseComponent,
    FourthphaseComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    CarouselComponent,
    SearchComponent,
    LastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
