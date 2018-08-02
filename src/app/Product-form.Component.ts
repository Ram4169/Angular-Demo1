import {Component} from '@angular/core'
import { Productform } from './Product-form'

@Component({
    selector: 'product-form',
    templateUrl: './Product-form.Component.html'
})

export class ProductFormComponent{
    model = new Productform(1, 'ProductA');
}