import { Component, EventEmitter, Input, Output, OnInit, HostListener} from '@angular/core';

import { TranslationPair } from './translation-pair';

@Component({
    selector: 'vt-translation-pair',
    templateUrl: './vt-translation-pair.html',
    styleUrls: ['./vt-translation-pair.css']
})
export class VtTranslationPairComponent implements OnInit {
    @Input() translationPairs: TranslationPair[] = [];
    currentPair: TranslationPair = {word:'', translation:''};

    @HostListener("window:keydown", ["$event"])
    onKeyDown($event:any) {
        if ($event.keyCode == 32) {
            this.randomTranslationPair();
        };
    }

    ngOnInit(): void {
        this.randomTranslationPair();
    }

    getRandomInt(min: number, max: number): number {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    randomTranslationPair(): void {
        var totalPairs, randomIndex;
        totalPairs = this.translationPairs.length;
        if (totalPairs) {
            randomIndex = this.getRandomInt(0, totalPairs - 1);
            this.currentPair = this.translationPairs[randomIndex];
        }
    }
}