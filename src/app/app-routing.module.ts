import { NavProductsComponent } from './nav-products/nav-products.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path:'', component:IndexComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
