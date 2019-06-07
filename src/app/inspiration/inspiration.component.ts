import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-inspiration',
    templateUrl: './inspiration.component.html',
    styleUrls: ['./inspiration.component.scss']
})

export class InspirationComponent implements OnDestroy {
    constructor() {
        console.log('in mainpage component!!');
    }

    ngOnDestroy() {
        console.log('in destroy component!!');
    }
}