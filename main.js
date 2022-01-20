window.addEventListener('load', init);

//Global Variable
let time = 5;
let score = 0;
let isPlaying;

//DOM ELEMENTS
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Words Arrays the we used which are going to be changing as you play
const wordsArray = [ 
    'heating',
    'functions',
    'sunlight',
    'absorbing',
    'systems',
    'collectors',
    'swimming',
    'radiated',
    'particular',
    'industrial',
    'understand',
    'process',
    'broken',
    'fewer',
    'solar',
    'works',
    'provide',
    'use',
    'energy',
    'much',
    'humidity',
    'packet',
    'material',
    'heat',
    'sources',
    'renewable',
    'electricity',
    'ways',
    'effective',
    'body',
];

// This is where you create the function
// Initialize Game
function init() {
    // Load words from Array
    loadWord(wordsArray);

    // Match the words typed with the displayed words
    wordInput.addEventListener('input', startMatch);

    // Setting the countdown timer (1000 milisecond is 1 second)
    setInterval(countdown, 1000);

    // check game status
    setInterval(checkStatus, 50);
 }

 

// Here you call the function to perform it on the webpage for you

//start Match
function startMatch() {
    console.log('MATCH');
    if(matchWords()) { 
      isPlaying = true;
      time = 6;
        loadWord(wordsArray);
        wordInput.value = '';
        score++;
    }
 scoreDisplay.innerHTML = score;
 }

 // Match the currentWord to wordInput
 function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
 }

// Pick and Show random word from the array
function loadWord(wordsArray) {

    // Generate random array index
    const randIndex = Math.floor(Math.random() * wordsArray.length);

    // Output random word meaning to change the default word on the screen to another word in the wordsArray provided
  currentWord.innerHTML = wordsArray[randIndex];
}

// for the timer to countdown
function countdown() {
// Make sure time is not run out
if (time > 0) {
    // Decrement
    time--;
} else if (time === 0) {
        // Game is Over
        isPlaying = false;
    }
    // Show time left
    timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
if(!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
}

}