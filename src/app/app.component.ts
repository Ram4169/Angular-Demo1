import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  //template: `<div><h1>{{appTitle}}</h1><div> to tutorial points.</div><div>`,
  template: `<ul>
              <li><a [routerLink] = "['/product']">Product</a></li>
              <li><a [routerLink] = "['/inventory']">Inventory</a></li>
              <li><a [routerLink] = "['/product-form']">Product Form</a></li>
            </ul>
            <router-outlet></router-outlet>`,
  //templateUrl: 'app/app.component.html',
  providers: [ProductService, appService]
})
export class AppComponent  { 
  appTitle: string = '';
  appStatus: Boolean = true;
  appList: any[] = [{Id: 1, Name: 'Ram'}, {Id: 2, Name: 'Krishna'}];

  iproducts: IProduct[];
   constructor(private _product: ProductService, private _appService: appService) {
   }
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(productItem => this.iproducts = productItem);
      this.appTitle = this._appService.getApp();
   }
   
}
