import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: 'signin', component: SigninComponent 
  },
  {
    path: 'checkout', component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
