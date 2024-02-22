// function play(){
//     // step-1. hide the home screen
//     const homeScection = document.getElementById('home-screen');
//     homeScection.classList.add('hidden');
//     // console.log(homeScection.classList);


//     // step-2. unhide the playground screen
//     const playground = document.getElementById('play-ground');
//     // console.log(playground);
//     playground.classList.remove('hidden')

// }

function continueGame() {
    //  step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it):
    const currenAlphabetElement = document.getElementById('current-alphabet');
    currenAlphabetElement.innerText = alphabet;

    // setBackgroundColor
    setBackgroundColorById(alphabet)
}

function play() {
    hideElementById('home-screen');
    hideElementById('score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueByID('current-life', 5);
    setTextElementValueByID('current-score', 0);
    
    continueGame();
};

function gameOver(){
    hideElementById('play-ground');
    showElementById('score');
    // update final score
    // 1.get the final score
    const lastScore = document.getElementById('current-score');
    const lastScoreValue = (lastScore.innerText);
    setTextElementValueByID('last-score', lastScoreValue);

    // clear the last selected alphabet bg:
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundById(currentAlphabet)
    
}
// second day----------------
function handlekeybordButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed = ', playerPressed);

    // stop the game if passed 'Esc';
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedCurrentAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedCurrentAlphabet);


    // check matched or not
    if (playerPressed === expectedCurrentAlphabet) {
        // console.log('you get a point');
        // console.log('you have passed currectly = ', expectedCurrentAlphabet);

        // update score
        // 1.current score ke id dia dorte hobe, 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScourText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScourText); 
        // console.log(currentScourText);
        // //  2.new score set korte hobe
        // const newScore = currentScore + 1;
        // console.log('new score', newScore);
        // // 3.show new score
        // currentScoreElement.innerText = newScore;




        //   function ar maddome--------------------------------------------------------------------->
        const currentScore = getTextElementById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueByID('current-score', newScore);



        // start a new round
        removeBackgroundById(expectedCurrentAlphabet)
        continueGame();
    } else {
        // console.log('you missed ,you lost a life');
        // // 1.current life get
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2. reduce the life count
        // const newLife = currentLife - 1;
        // // 3.show life
        // currentLifeElement.innerText = newLife;

        // function use-------------------------------------------------->
        const currentLife = getTextElementById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueByID('current-life', updateLife);
        if(updateLife === 0){
            console.log('game over');
            gameOver();
        }


    }
}
// capture keyboard key press:
document.addEventListener('keyup', handlekeybordButtonPress);