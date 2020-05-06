import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  import { from } from 'rxjs';
import { FirstComponent } from './first/first.component';
import { SecondphaseComponent } from './secondphase/secondphase.component';
import { ThirdphaseComponent } from './thirdphase/thirdphase.component';
import { FourthphaseComponent } from './fourthphase/fourthphase.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  
  {
    path:'home',
    component: HomeComponent
  },
  
    {
      path:'products',
      component: ProductsComponent
    },
    
    {
  path:'contact',
  component: ContactComponent
},

    
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
