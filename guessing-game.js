function guessingGame() {
  // let answer = Math.floor(Math.random() * 100) + 1;
  // temp answer for testing
  let answer = 60;

  let gameRunning = true;
  let guesses = 0;
  const guess = (num) => {
    //if answer correct
    if(gameRunning) {
      if(num === answer) {
        guesses++;
        gameRunning = false;
        return `You win! You found ${answer} in ${guesses} guesses.`;
      } 
      else if(num < answer) {
        guesses++;
        return `${num} is too low!`;
      } 
      else if(num > answer) {
        guesses++;
        return `${num} is too high!`;
      }
    }
    return "The game is over, you already won!";
  }
  return guess;
}



module.exports = { guessingGame };
