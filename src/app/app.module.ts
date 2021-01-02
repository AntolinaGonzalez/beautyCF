import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavProductsComponent } from './nav-products/nav-products.component';
import { CorporalCareComponent } from './corporal-care/corporal-care.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavProductsService } from './nav-products/nav-products.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavProductsComponent,
    CorporalCareComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [NavProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
