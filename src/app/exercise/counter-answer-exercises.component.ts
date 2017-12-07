import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Answer } from './../answer/answer';

@Component({
    selector: 'counter-answer-exercises',
    template: `
        <div>
            <p><strong>Total Exercises:</strong> {{total}}</p>
            <p><strong>Correct Exercises:</strong> {{correct}}</p>
        </div>
    `
})
export class CounterAnswerExercises {
    @Input() total:number = 0;
    @Input() correct:number = 0;
}