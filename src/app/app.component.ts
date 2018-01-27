import { Component, AfterViewInit, QueryList, ViewChildren, OnInit } from '@angular/core';

import { VtSelectAnswerComponent } from './select-answer/vt-select-answer.component';
import { AnswerService } from './select-answer/answer.service';
import { Answer } from './select-answer/answer';

import { VtTranslationPairComponent } from './translation-pair/vt-translation-pair.component';
import { TranslationPairService } from './translation-pair/translation-pair.service';
import { TranslationPair } from './translation-pair/translation-pair';

import { VtCounterAnswerComponent } from './counter-answer/vt-counter-answer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        AnswerService,
        TranslationPairService
    ]
})
export class AppComponent implements OnInit, AfterViewInit {
    availableTranslationPairs: TranslationPair[];
    availableAnswers: Answer[];
    totalSelectedAnswers: number = 0;
    correctSelectedAnswers: number = 0;
    @ViewChildren(VtSelectAnswerComponent) vtSelectList: QueryList<VtSelectAnswerComponent>;

    constructor(
        private answerService: AnswerService,
        private translationService: TranslationPairService
    ) {}

    ngOnInit() {
        this.availableAnswers = this.answerService.getAnswers();
        this.availableTranslationPairs = this.translationService.getTranslationPairs();
    }

    ngAfterViewInit() {}

    onAnswerChange(answer: Answer) {
        console.log('onAnswerChange: answer = ', answer);
        this.totalSelectedAnswers = 0;
        this.correctSelectedAnswers = 0;
        setTimeout(() => {
            this.vtSelectList.toArray().forEach((elem) => {
                console.log('onAnswerChange: elem = ', elem);
                if (elem.selectedAnswer.value) {
                    ++this.totalSelectedAnswers;
                }
                if (elem.selectedAnswer.correct) {
                    ++this.correctSelectedAnswers;
                }
            });
        }, 0);
    }

}
