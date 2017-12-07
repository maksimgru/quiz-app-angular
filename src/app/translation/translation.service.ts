import {Injectable} from "@angular/core";

import {TRANSLATIONS} from "./mock-translations";

@Injectable()
export class TranslationService {
    getTranslationPairs() {return TRANSLATIONS;}
}