# Quiz App Angular
## View Demo http://embed.plnkr.co/K3R1YTsyrz5gBwoEGB8z/?show=preview
1. Write an application where two components would work:
  * The first - select exercise. At the input, the component receives an array of responses (the string + the correct flag).
    * Example: [{value: "apple", correct: false}, {value: "pear", correct: true}, {value: "pineapple", correct: false}]
    * Exercise looks like a normal html select, offering to select the answer from the list.
  * The second - counter for displaying the number of points.
    * Displays only 2 numbers:
    * the total number of selected answers on the page;
    * the number of exercises where the correct answer is selected.

2. Write a component that implements the widget to learn words:
  * At the input, the component takes an array of words and translations.
  * Example: [{word: "apple", translation: "apple"}, {word: "nuts", translation: "орех"}]
  * The component should display only one pair of words at a time, switching to the next pair occurs when the spacebar is pressed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Install
Run `npm install` in your root directory.

## Development server
Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
