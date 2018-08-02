import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { AppProduct } from './Product.Component';
import {ProductFormComponent } from './Product-form.Component';
import { AppInventory } from './Inventory.Component';
import { PageNotFoundComponent } from './PageNotFound.Component'
import { RouterModule, Routes, Route } from '@angular/router';

import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {path: 'product', component: AppProduct},
  {path: 'product-form', component: ProductFormComponent},
  {path: 'inventory', component: AppInventory},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, AppProduct, AppInventory, PageNotFoundComponent, ProductFormComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
