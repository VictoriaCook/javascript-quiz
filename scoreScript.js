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

// Create function to populate score rankings

    // sort first from highest score to lowest score - how to sort array of objects 
    
    // for loop to create p tags and populate with scores (let i = 0; i < variable.length; i++) {
    // makeListItem = document.createElement('li');
    // makeOrderedList = document.createElement();
    // rankDisplay.append(createPara);
    // createPara.innerHTML = initialsRank + ' - ' + scoreRank;

// add event listener for view high scores to also load scores on page
// Link to separate html file where local storage scores are shown 
// Ranked from lowest number to highest number (array sort?)
// Include functionality to clear high scores (delete from local storage) localStorage.clear();


// var initialsRank = localStorage.getItem("initials");
    // var scoreRank = localStorage.getItem("scoreValue");