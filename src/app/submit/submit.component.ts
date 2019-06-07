import { Component, OnDestroy } from '@angular/core';
import { RouterNav } from '../service/routernav.service';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.scss']
})

export class SubmitComponent implements OnDestroy {
    constructor(private routerNav: RouterNav) {
        console.log('in submit component!!');
    }

    goTo(from, to) {
        this.routerNav.navigateTo(from, to);
    }

    ngOnDestroy() {
        console.log('in destroy component!!');
    }
}