import { navItems } from "./../navBarItems";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";

@Injectable()
export class NavProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:3000/products");
  }

  getNavItems(): Observable<any> {
    return of(navItems);
  }

  getProductsType(type: any): Observable<any> {
    let params = "http://localhost:3000/products/"+type
    let result = this.http.get(params);
    return result;
  }
}
