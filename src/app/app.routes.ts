import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductComponent } from './product/product.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  
    {
        path:"home",component:HomePageComponent
    },
    {
        path:"add",component:AddProductComponent
    },
    {
        path:"update",component:UpdateProductComponent
    },
    {
        path:"product",component:ProductComponent
    },
    {
        path:"login",component:LoginPageComponent
    },
    {
        path:"",component:HomePageComponent
    },
    {
        path:"**",component:NotFoundPageComponent
    }
];
