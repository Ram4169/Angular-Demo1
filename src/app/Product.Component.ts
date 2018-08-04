import { Component } from "@angular/core";
import { Router, Route } from '@angular/router';

@Component({
    selector: 'my-app',
    //template: 'Products'
    templateUrl: './product.component.html'
    //template: '<ul><li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }">{{ item }}</li></ul><pagination-controls (pageChange) = "p = $event"></pagination-controls>',
    
})

export class AppProduct {
    TutorialName: string = 'Angular JS2';
    name: string = '';
    Status: Boolean = true;
    appList: string[] = ["Binding", "Display", "Services"];
    constructor(private _router: Router) { }
    onBack(): void {
        this._router.navigate(['inventory']);
    }
    clicked(){
        if(this.Status)
            this.Status = false;
        else
            this.Status = true;
    }

}