import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RouterNav {
    historyStack;
    constructor(private router: Router) {
        this.historyStack = [];
    }

    clearHistoryStack() {
        this.historyStack();
    }

    goback() {
        if (this.historyStack.length == 0) {
            return
        } else {
            let lastState = this.historyStack[this.historyStack.length];
            this.clearHistoryStack();
            this.router.navigate([`/${lastState}`]);
        }
    }

    navigateTo(from, to) {
        if (this.historyStack.length > 0) {
            this.clearHistoryStack();
        }
        this.historyStack.push(from);
        this.router.navigate([`${to}`]);
    }
}