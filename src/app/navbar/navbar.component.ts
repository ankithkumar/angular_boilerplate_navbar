import { Component, OnDestroy } from '@angular/core';
import { RouterNav } from '../service/routernav.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnDestroy {
    constructor(private routerNav: RouterNav) {
        console.log('in navbar component!!');
    }

    goBack() {
        this.routerNav.goback();
    }
    
    ngOnDestroy() {
        console.log('in destroy component!!');
    }
}