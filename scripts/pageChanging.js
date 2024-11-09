

// function play() {
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function keyPressEvent(event) {
   const pressedKey = event.key;
   const providedKey = document.getElementById('changing-alphabet').innerText.toLocaleLowerCase();
   // console.log(pressedKey, providedKey);
   if (pressedKey === 'Escape') {
      gameOver();
   }
   if (pressedKey === providedKey) {


      const currentScore = getTextElementValueById('score');
      const newScore = currentScore + 1;
      setTextElementValueById('score', newScore);

      // -------------------------------------------
      // console.log('you won and get a point');
      // const currentScoreElement = document.getElementById('score');
      // const currentScoreText = currentScoreElement.innerText;
      // const currentScoreInt = parseInt(currentScoreText);
      // const newScore = currentScoreInt + 1;
      // console.log(newScore);
      // currentScoreElement.innerText = newScore;
      removeBackgroundById(providedKey);
      continueGame();
   }
   else {

      const currentLife = getTextElementValueById('life');
      const newLife = currentLife - 1;
      setTextElementValueById('life', newLife);


      if (newLife <= 0) {
         gameOver();
      }

      // -------------------------------------------
      // console.log('you lose and lost a point');
      // const lifeElement = document.getElementById('life');
      // const currentLifeText = lifeElement.innerText;
      // const currentLife = parseInt(currentLifeText);
      // const newLife = currentLife - 1;
      // lifeElement.innerText = newLife;
   }


   // console.log(changingAlphabet);

}
document.addEventListener('keyup', keyPressEvent);

function continueGame() {
   // random alphabet
   const randomAlphabet = generateARandomAlphabet();

   // show the alphabet or change the alphabet
   const changingAlphabet = document.getElementById('changing-alphabet');
   changingAlphabet.innerText = randomAlphabet;

   //  changing the hover effect on keyboard
   changeBackgroundById(randomAlphabet);
}

function gameOver() {
   hideElementById('play-ground');
   showElementById('score-section');
   const finalScore = getTextElementValueById('score');
   setTextElementValueById('game-score', finalScore);
}

function play() {
   hideElementById('home');
   showElementById('play-ground');
   hideElementById('score-section');
   setTextElementValueById('life', 5);
   setTextElementValueById('score', 0);

   const lastClicked = document.getElementById('changing-alphabet');
   const alphabet = lastClicked.innerText;
   const Id = alphabet.toLocaleLowerCase();
   
   removeBackgroundById(Id);
   // console.log(Id);

   continueGame();
}