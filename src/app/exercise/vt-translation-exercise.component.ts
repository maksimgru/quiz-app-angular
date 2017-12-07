import { Component, EventEmitter, Input, Output, OnInit, HostListener} from '@angular/core';

import { Translation } from './../translation/translation';

@Component({
    selector: 'vt-translation-exercise',
    template: `
        <div>
            <p><strong>Word:</strong> {{currentPair.word}}</p>
            <p><strong>Translation</strong>: {{currentPair.translation}}</p>
        </div>
    `
})
export class VtTranslationExerciseComponent implements OnInit{
    @Input() translationPairs: Translation[] = [];
    currentPair: Translation = {word:'', translation:''};

    @HostListener("window:keydown", ["$event"])
    onKeyDown($event:any) {
        if ($event.keyCode == 32) {
            this.randomTranslationPair();
        };
    }

    ngOnInit(): void {
        this.randomTranslationPair();
    }

    getRandomInt(min: number, max: number): number
    {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    randomTranslationPair(): void{
        var totalPairs, randomIndex;
        totalPairs = this.translationPairs.length;
        if (totalPairs) {
            randomIndex = this.getRandomInt(0, totalPairs - 1);
            this.currentPair = this.translationPairs[randomIndex];
        }
    }
}