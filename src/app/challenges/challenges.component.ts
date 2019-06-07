import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.component.html',
    styleUrls: ['./challenges.component.scss']
})

export class ChallengesComponent implements OnDestroy {
    constructor() {
        console.log('in challenges component!!');
    }

    ngOnDestroy() {
        console.log('in destroy component!!');
    }
}