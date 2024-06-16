import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate : [AuthGuard]
  },
  {
    component: SellerAddProductComponent,
  path: 'seller-addproduct',
  canActivate : [AuthGuard]
  },
  {
    component:SellerUpdateProductComponent,
    path:'seller-update-product/:name',
    canActivate:[AuthGuard]
  },
  {
    component:UserAuthComponent,
        path:'user-auth',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
