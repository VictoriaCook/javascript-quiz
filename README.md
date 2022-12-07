# Javascript Quiz

## Multiple Choice JavaScript Coding Quiz

This is an application that enables users to test their JavaScript knowledge using a timed multiple choice quiz app. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## How the Multiple Choice JavaScript Coding Quiz Works

The quiz starts with a landing page inviting the user to start the timed quiz. Once the start button has been clicked, the timer starts counting down and the user is prompted with the first question and four possible responses. Once the user clicks their chosen response, a message appears informing the user if their response was correct or incorrect. If incorrect, the timer will subtract 10 seconds as a penalty. The quiz will then load the next question. This pattern continues until all questions have been prompted and responded, or when the timer reaches zero (whichever happens first). Then, the final quiz page loads (and the timer stops if it hasn't reached zero), informing the user of their score and inviting them to store their score by inputting their initials in the form. Once they have done so, a 'High Scores' page loads, showing previous high scores based on what has been locally stored. The user can then return to the quiz landing page or delete all locally stored scores.

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Deployed URL

The URL for the deployed page is here: https://victoriacook.github.io/[INSERT]

---

## Licence

The Licence for this project is MIT.