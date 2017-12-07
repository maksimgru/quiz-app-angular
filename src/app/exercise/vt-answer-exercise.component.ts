import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Answer } from './../answer/answer';

@Component({
    selector: 'vt-answer-exercise',
    template: `
        <form>
            <select [(ngModel)]="selectData" (ngModelChange)="onSelect($event)" name="select">
                <option [ngValue]="emptyAnswer" [attr.selected]="true">-- select Answer --</option>
                <option *ngFor="let answer of answers" [ngValue]="answer">{{answer.value}}</option>
            </select>
        </form>
    `,
    styles: [
        'form { width:50%; margin:auto;}',
        'select { width:100%; padding:1em;}'
    ]
})
export class VtAnswerExerciseComponent implements OnInit{
    @Input() answers;
    @Output() onAnswerChange:EventEmitter<any> = new EventEmitter<Answer>();
    selectedAnswer: Answer = {value:'', correct:false};
    emptyAnswer: Answer = {value:'', correct:false};
    selectData: Answer;

    onSelect(answer: Answer): void {
        this.onAnswerChange.emit(answer);
        this.selectedAnswer = answer;
    }

    ngOnInit(): void {
        this.selectData = this.emptyAnswer;
    }
}