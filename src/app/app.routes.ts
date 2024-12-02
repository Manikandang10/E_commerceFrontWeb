import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

export const routes: Routes = [
  
    {
        path:"home",component:HomePageComponent
    },
    {
        path:"add",component:AddProductComponent
    },
    {
        path:"**",component:UpdateProductComponent
    }
];
