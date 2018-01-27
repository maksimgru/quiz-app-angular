import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Answer } from './answer';

@Component({
    selector: 'vt-select-answer',
    templateUrl: './vt-select-answer.html',
    styleUrls: ['./vt-select-answer.css']
})
export class VtSelectAnswerComponent implements OnInit {
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