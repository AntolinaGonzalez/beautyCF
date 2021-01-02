import { Items } from "./../navItem";
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
  navItems?: Items[];
  products?: Products[];
  selectedType!: Items;
  ngOnInit() {
    this.productsService.getNavItems().subscribe((item) => {
      this.navItems = item;
    });
  }

  onSelect(item: Items): void {
    this.selectedType = item;
  }
}
