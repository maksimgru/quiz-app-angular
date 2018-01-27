import { Component, Input } from '@angular/core';

@Component({
    selector: 'vt-counter-answer',
    templateUrl: './vt-counter-answer.html',
    styleUrls: ['./vt-counter-answer.css']
})
export class VtCounterAnswerComponent {
    @Input() total:number = 0;
    @Input() correct:number = 0;
}