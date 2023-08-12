// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
const favdrink = "fanta lemon";
console.log(favdrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let string1 = "multiple words in this string";
let wordToFind = "apple";
if (string1.includes(wordToFind)) {
    console.log(`The word "${wordToFind}" is present in the string.`);
  } else {
    console.log(`The word "${wordToFind}" is not present in the string.`);
  }
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Example usage:
  const randomChoice = getRandomChoice();
  console.log("Randomly selected choice:", randomChoice);
  
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
