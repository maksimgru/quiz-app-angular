import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { VtSelectAnswerComponent } from './select-answer/vt-select-answer.component';
import { VtCounterAnswerComponent } from './counter-answer/vt-counter-answer.component';
import { VtTranslationPairComponent } from './translation-pair/vt-translation-pair.component';

@NgModule({
    declarations: [
        AppComponent,
        VtSelectAnswerComponent,
        VtCounterAnswerComponent,
        VtTranslationPairComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
