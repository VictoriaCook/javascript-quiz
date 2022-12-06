// Set up content div

const titleDisplay = document.createElement('h1');
const introDisplay = document.createElement('p');
introDisplay.id = 'intro'
const startButton = document.createElement('button');
startButton.id = 'initial-button'
const quiz = document.getElementById('content');
quiz.append(titleDisplay, introDisplay, startButton);
titleDisplay.innerHTML = 'Coding Quiz Challenge';
introDisplay.innerHTML = 'Try to answer the following code-related questions within the time limit. <br> Keep in mind that incorrect answers will penalise your score/time by ten seconds!';
startButton.innerHTML = 'Start Quiz';

// Set up message div

let incorrectMsgDisplay = document.getElementById('incorrect-msg');
let correctMsgDisplay = document.getElementById('correct-msg');
// document.getElementById('correct-msg').style.display = 'none'
// const incorrectMsgDisplay = document.getElementById('incorrect-msg');
// const correctMsgDisplay = document.getElementById('correct-msg');

// Set up timer div

const timeDisplay = document.createElement('p');
const timer = document.getElementById('timer');
timer.appendChild(timeDisplay);
timeDisplay.innerHTML = 'Time: 0';
var secondsLeft = 75;

// Set up score variables
let score = 0;
// let initials
// let storedScore = {
//     name: initials.value,
//     finalScore: score.value,
// }

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
let questionNumber = 0;

// Quiz functionality from here

startButton.addEventListener('click', initQuiz);

// Create timer function

function countdown() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeDisplay.innerHTML = 'Time: ' + secondsLeft;
    
        if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          endQuiz();
        }
    
      }, 1000);
    }

// Create quiz elements

function initQuiz() {
    // start timer
    countdown();
    
    // remove intro para
    const initialP = document.getElementById('intro');
    initialP.remove();
    
    // remove initial button
    const initialB = document.getElementById('initial-button');
    initialB.remove();
    
    // for loop to create four buttons
    for (let i = 0; i < 4; i++) {
        createButton = document.createElement('button');
        createButton.id = 'buttonId'+i;
        createButton.classList.add('mc-buttons');
        createButton.addEventListener('click', showQuestions); 
        quiz.appendChild(createButton);
    }

    // populate with q1
    titleDisplay.innerHTML = questionsArray[questionNumber].title;
    buttonId0 = document.getElementById('buttonId0');
    buttonId0.innerHTML = questionsArray[questionNumber].choices[0];
    buttonId1 = document.getElementById('buttonId1');
    buttonId1.innerHTML = questionsArray[questionNumber].choices[1];
    buttonId2 = document.getElementById('buttonId2');
    buttonId2.innerHTML = questionsArray[questionNumber].choices[2];
    buttonId3 = document.getElementById('buttonId3');
    buttonId3.innerHTML = questionsArray[questionNumber].choices[3];
}

// Create quiz functionality triggered by a click event on any multiple choice button

function showQuestions(e) {
    // let correctMsgDisplay = document.getElementById('correct-msg');
    // let incorrectMsgDisplay = document.getElementById('incorrect-msg');

    // if user selected the wrong answer, remove seconds and show 'incorrect'
    if (e.target.innerHTML !== questionsArray[questionNumber].answer) {
        secondsLeft = secondsLeft - 10;
        incorrectMsgDisplay.setAttribute("style", "display: block");
    
    } else {
        correctMsgDisplay.style.display = 'block';
        //correctMsgDisplay.setAttribute("style", "display: block");
        score++;
    }
    setTimeout(() => {
        populateNextQuestion(); 
    }, 1000);
    
}

function populateNextQuestion() {
    // let correctMsgDisplay = document.getElementById('correct-msg');
    // let incorrectMsgDisplay = document.getElementById('incorrect-msg');
    correctMsgDisplay.setAttribute("style", "display: none");
    incorrectMsgDisplay.setAttribute("style", "display: none");
    
    // populate quiz content from array
    questionNumber++ 
    if (questionNumber >= questionsArray.length) {
        endQuiz();
    } else { 
        titleDisplay.innerHTML = questionsArray[questionNumber].title;
        buttonId0 = document.getElementById('buttonId0');
        buttonId0.innerHTML = questionsArray[questionNumber].choices[0];
        buttonId1 = document.getElementById('buttonId1');
        buttonId1.innerHTML = questionsArray[questionNumber].choices[1];
        buttonId2 = document.getElementById('buttonId2');
        buttonId2.innerHTML = questionsArray[questionNumber].choices[2];
        buttonId3 = document.getElementById('buttonId3');
        buttonId3.innerHTML = questionsArray[questionNumber].choices[3];
    }
}

// Create end quiz function

function endQuiz() {
    // remove previous buttons
    buttonId0.remove();
    buttonId1.remove();
    buttonId2.remove();
    buttonId3.remove();
    // let incorrectMsgDisplay = document.getElementById('incorrect-msg');
    // let correctMsgDisplay = document.getElementById('correct-msg');
    correctMsgDisplay.remove();
    incorrectMsgDisplay.remove();

    // set up quiz result page
    titleDisplay.innerHTML = 'All done!';
    const scoreDisplay = document.createElement('p');
    scoreDisplay.innerHTML = 'Your final score is ' + score + '/5!';
    const createForm = document.createElement('form');
    const labelText = document.createElement('label');
    const inputDisplay = document.createElement('input');
    inputDisplay.id = 'input-initials';
    const submitDisplay = document.createElement('input'); 
    submitDisplay.id = 'submit-button';
    // const addAnchor = document.createElement('a');
    // submitDisplay.appendChild(addAnchor);
    // addAnchor.setAttribute('href', '/scores.html'); // up to here re adding link to submit button
    labelText.innerHTML = 'Enter initials: ';
    inputDisplay.setAttribute('type', 'text');
    submitDisplay.setAttribute('type', 'submit');
    createForm.appendChild(labelText);
    createForm.appendChild(inputDisplay);
    createForm.appendChild(submitDisplay);
    quiz.append(scoreDisplay, createForm);

    // set up event listener for a click on the submit button
    // let submitButton = document.getElementById('submit-button');
    // submitButton.addEventListener('click', submitScore);
    submitDisplay.addEventListener('click', submitScore); // window.location.href = 'scores.html'
}


// Create submit functionality with local storage

function submitScore(e) {
    e.preventDefault();
    // console.log('clicked!');
    let initials = document.getElementById('input-initials').value;
    let scoreValue = score.toString();
    // console.log(initials);
    let highScore = {
        initials ,
        scoreValue ,
    };
    let existingHighScores = JSON.parse(localStorage.getItem('highscores')) || []; 
    existingHighScores.push(highScore);
    localStorage.setItem('highscores', JSON.stringify(existingHighScores));
    window.location.href = 'scores.html'
}

