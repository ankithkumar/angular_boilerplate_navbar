import { Component, OnDestroy } from '@angular/core';
import { RouterNav } from '../service/routernav.service';

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.component.html',
    styleUrls: ['./challenges.component.scss']
})

export class ChallengesComponent implements OnDestroy {
    constructor(private routerNav: RouterNav) {
        console.log('in challenges component!!');
    }

    goTo(from, to) {
        this.routerNav.navigateTo(from, to);
    }

    ngOnDestroy() {
        console.log('in destroy component!!');
    }
}