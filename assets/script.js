// Set up content div

const titleDisplay = document.createElement('h1');
const introDisplay = document.createElement('p');
introDisplay.id = 'intro'
const button = document.createElement('button');
button.id = 'initial-button'
const quiz = document.getElementById('content');
quiz.append(titleDisplay, introDisplay, button);
titleDisplay.innerHTML = 'Coding Quiz Challenge';
introDisplay.innerHTML = 'Try to answer the following code-related questions within the time limit. <br> Keep in mind that incorrect answers will penalise your score/time by ten seconds!';
button.innerHTML = 'Start Quiz';

// Set up timer div

const timeDisplay = document.createElement('p');
const timer = document.getElementById('timer');
timer.appendChild(timeDisplay);
timeDisplay.innerHTML = 'Time: 0';
var secondsLeft = 75;

// Set up array of objects for quiz content

const q1 = {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
}

const q2 = {
    title: 'The condition in an if/else statement is enclosed with _____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'round brackets'],
    answer: 'round brackets',
}

const q3 = {
    title: 'Arrays in JavaScript can be used to store ______.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: 'all of the above',
}

const q4 = {
    title: 'String values must be enclosed within ______ when being assigned to variables.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'round brackets'],
    answer: 'quotes',
}

const q5 = {
    title: 'A very useful tool during development and debugging for printing content to the debugger is ______.',
    choices: ['JavaScript', 'terminal/Bash', 'for loops', 'console.log'],
    answer: 'console.log',
}

const questionsArray = [q1, q2, q3, q4, q5];

// Quiz functionality from here

function startQuizClick() {
    // insert series of functions here
    countdown();
    buildQuiz();
    getResult();
}

// Create timer function

function countdown() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeDisplay.innerHTML = 'Time: ' + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          // Show scores page
        }
    
      }, 1000);
    }

// Create quiz elements

function buildQuiz() {
    // remove intro para
    const initialP = document.getElementById('intro');
    initialP.remove();
    
    // remove initial button
    const initialB = document.getElementById('initial-button');
    initialB.remove();
    
    // for loop to create four buttons
    for (let i = 0; i < 4; i++) {
        button;
        button.id = i;
        button.addEventListener('click', getResult());
        quiz.appendChild(button);
    }
    // for loop to populate content
    for (let x = 0; x < questionsArray.length; x++) {
        titleDisplay.innerHTML = questionsArray[x].title;
        button1 = document.getElementById('0');
        = questionsArray[x].choices[0];

    }
    
}

// Create quiz functionality

function getResult() {

}

// Create submit button functionality