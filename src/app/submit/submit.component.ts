import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.scss']
})

export class SubmitComponent implements OnDestroy {
    constructor() {
        console.log('in submit component!!');
    }

    ngOnDestroy() {
        console.log('in destroy component!!');
    }
}