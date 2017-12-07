import {Injectable} from "@angular/core";

import {ANSWERS} from "./mock-answers";

@Injectable()
export class AnswerService {
    getAnswers() {return ANSWERS;}
}