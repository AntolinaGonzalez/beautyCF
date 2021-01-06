import { Products } from "./../products";
import { NavProductsService } from "./../nav-products/nav-products.service";
import { Items } from "./../navItem";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-corporal-care",
  templateUrl: "./corporal-care.component.html",
  styleUrls: ["./corporal-care.component.css"],
})
export class CorporalCareComponent implements OnChanges {
  constructor(private productsService: NavProductsService) {}
  products!: Products[];
  @Input() item!: Items;
  ngOnInit(): void {
    if (!this.item) {
      this.productsService.getProductsType('corporal').subscribe((data) => {
        this.products = data;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item) {
      this.productsService.getProductsType(this.item.cod).subscribe((data) => {

        this.products = data
      });
    }
  }
}
