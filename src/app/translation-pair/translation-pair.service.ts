import {Injectable} from "@angular/core";

import {TRANSLATIONS} from "./mock-translation-pairs";

@Injectable()
export class TranslationPairService {
    getTranslationPairs() {return TRANSLATIONS;}
}