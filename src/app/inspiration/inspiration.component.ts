import { Component, OnDestroy } from '@angular/core';
import { RouterNav } from '../service/routernav.service';

@Component({
    selector: 'app-inspiration',
    templateUrl: './inspiration.component.html',
    styleUrls: ['./inspiration.component.scss']
})

export class InspirationComponent implements OnDestroy {
    constructor(private routerNav: RouterNav) {
        console.log('in mainpage component!!');
    }

    goTo(from, to) {
        this.routerNav.navigateTo(from, to);
    }

    ngOnDestroy() {
        console.log('in destroy component!!');
    }
}