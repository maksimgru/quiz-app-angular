### Answer Exercises Angular | Skills Test | Maksim Petrenko
* Write an application where two components would work:
** The select exercise. At the input, the component receives an array of responses (the string + the correctness of the answer).
Example: [{value: "apple", correct: false}, {value: "pear", correct: true}, {value: "pineapple", correct: false}]
Exercise looks like a normal html select, offering to select the answer from the list.
Widget for displaying the number of points. Displays only 2 numbers: the total number of select exercises on the page; the number of exercises where the correct answer is selected.

2. Write a component that implements the widget to learn words.
At the input, the component takes an array of words and translations.
Example: [{word: "apple", translation: "apple"}, {word: "nuts", translation: "орех"}]
The component should display only one pair of words at a time (for example, "apple-apple"), switching to the next pair occurs when the space is pressed.