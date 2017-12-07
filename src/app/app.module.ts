import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VtTranslationExerciseComponent } from './exercise/vt-translation-exercise.component';
import { VtAnswerExerciseComponent } from './exercise/vt-answer-exercise.component';
import { CounterAnswerExercises } from './exercise/counter-answer-exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterAnswerExercises,
    VtAnswerExerciseComponent,
    VtTranslationExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
