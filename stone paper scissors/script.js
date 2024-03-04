let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    // rock, paper, scissors
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const drawGame = () => {
    // console.log('Game was Draw! Play Again.');
    msg.innerText = 'Game was Draw! Play Again.';
    msg.style.backgroundColor = '#081b31';
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log('You Win!');
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log('You Lose!');
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}
const playGame = (userChoice) => {
    // console.log(`User Choice = ${userChoice}`);
    // Generate Computer Choice --> Modular Programming = everay little or big task is in the function.write reuseable code for future.
    const compChoice = genCompChoice();
    // console.log(`Comp Choice = ${compChoice}`);
    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // paper,scissors
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            // rock,paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        // console.log('Choice was Clicked', userChoice);
        playGame(userChoice);
    });
});
