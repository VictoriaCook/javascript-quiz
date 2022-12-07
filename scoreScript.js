let existingHighScores = JSON.parse(localStorage.getItem('highscores')) || [];
const rankDisplay = document.getElementById('ranking');
var orderedListEl = document.createElement('ol');
orderedListEl.id = 'olId';

// create list items for each object stored locally

if (existingHighScores.length > 0) {
    existingHighScores.forEach(function(highscore) {
    var listItemEl = document.createElement('li');
    listItemEl.textContent = `${highscore.initials}: ${highscore.scoreValue}`;
    orderedListEl.appendChild(listItemEl);
    })
}

rankDisplay.appendChild(orderedListEl);

// create delete local storage functionality and remove from display

const deleteStored = document.getElementById('clear-high-scores');
deleteStored.addEventListener('click', deleteScores);

function deleteScores() {
    localStorage.clear();
    olId.remove();
}