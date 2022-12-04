const titleDisplay = document.createElement('h1');
const introDisplay = document.createElement('p');
const buttonDisplay = document.createElement('button');
const quiz = document.getElementById('content');
quiz.append(titleDisplay, introDisplay, buttonDisplay);

const timeDisplay = document.createElement('p');
const timer = document.getElementById('timer');
timer.appendChild(timeDisplay);
timeDisplay.innerHTML = 'Time: 0';

// <h1 id="title-question">Coding Quiz Challenge</h1>
// <p>Try to answer the following code-related questions within the time limit. <br> Keep in mind that incorrect answers will penalise your score/time by ten seconds!</p>