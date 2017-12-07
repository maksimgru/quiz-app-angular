import { Component, AfterViewInit, QueryList, ViewChildren, OnInit } from '@angular/core';

import { VtTranslationExerciseComponent } from './exercise/vt-translation-exercise.component';
import { VtAnswerExerciseComponent } from './exercise/vt-answer-exercise.component';
import { CounterAnswerExercises } from './exercise/counter-answer-exercises.component';

import { Answer } from './answer/answer';
import { AnswerService } from './answer/answer.service';

import { Translation } from './translation/translation';
import { TranslationService } from './translation/translation.service';

@Component({
    selector: 'app-root',
    template: `
        <h1>ANSWERS:</h1>
        <vt-answer-exercise [answers]="availableAnswers" (onAnswerChange)="onAnswerChange($event)"></vt-answer-exercise>
        <vt-answer-exercise [answers]="availableAnswers" (onAnswerChange)="onAnswerChange($event)"></vt-answer-exercise>
        <vt-answer-exercise [answers]="availableAnswers" (onAnswerChange)="onAnswerChange($event)"></vt-answer-exercise>
        <vt-answer-exercise [answers]="availableAnswers" (onAnswerChange)="onAnswerChange($event)"></vt-answer-exercise>
        <vt-answer-exercise [answers]="availableAnswers" (onAnswerChange)="onAnswerChange($event)"></vt-answer-exercise>
        <vt-answer-exercise [answers]="availableAnswers" (onAnswerChange)="onAnswerChange($event)"></vt-answer-exercise>
        <counter-answer-exercises [total]="totalCountVtAnswerExercises" [correct]="correctCountVtAnswerExercises"></counter-answer-exercises>

        <h1>TRANSLATIONS:</h1>
        <p>Press "spacebar" keyboard to next translation</p>
        <vt-translation-exercise [translationPairs]="availableTranslations"></vt-translation-exercise>
    `,
    providers: [AnswerService, TranslationService]
})
export class AppComponent implements OnInit, AfterViewInit{
    availableTranslations: Translation[];
    availableAnswers: Answer[];
    totalCountVtAnswerExercises: number = 0;
    correctCountVtAnswerExercises: number = 0;
    @ViewChildren(VtAnswerExerciseComponent) vtExercisesList: QueryList<VtAnswerExerciseComponent>;

    constructor(
        private answer_service: AnswerService,
        private translation_service: TranslationService
    ) {}

    ngOnInit() {
        this.availableAnswers = this.answer_service.getAnswers();
        this.availableTranslations = this.translation_service.getTranslationPairs();
    }

    onAnswerChange(answer: Answer) {
        this.correctCountVtAnswerExercises = 0;
        setTimeout(() => {
            this.vtExercisesList.toArray().forEach((exercise) => {
                if (exercise.selectedAnswer.correct) {
                    ++this.correctCountVtAnswerExercises;
                }
            });
        }, 0);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.totalCountVtAnswerExercises = this.vtExercisesList.length;
        }, 0);
    }
}
