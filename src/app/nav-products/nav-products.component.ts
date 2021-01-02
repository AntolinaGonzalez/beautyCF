import { Products } from "./../products";
import { NavProductsService } from "./nav-products.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-products",
  templateUrl: "./nav-products.component.html",
  styleUrls: ["./nav-products.component.css"],
})
export class NavProductsComponent implements OnInit {
  constructor(private productsService: NavProductsService) {}
  products?: Products[];

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
