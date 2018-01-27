import {Injectable} from "@angular/core";

import {ANSWERS} from "./mock-select-answers";

@Injectable()
export class AnswerService {
    getAnswers() {
        return ANSWERS;
    }
}