import { Component, OnDestroy } from '@angular/core';
import { RouterNav } from '../service/routernav.service';

@Component({
    selector: 'app-advertise',
    templateUrl: './advertise.component.html',
    styleUrls: ['./advertise.component.scss']
})

export class AdvertiseComponent implements OnDestroy {
    constructor(private routerNav: RouterNav) {
        console.log('in advertise component!!');
    }

    goTo(from, to) {
        this.routerNav.navigateTo(from, to);
    }
    
    ngOnDestroy() {
        console.log('in destroy component!!');
    }
}