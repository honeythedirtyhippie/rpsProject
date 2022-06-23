const choices = ["rock","paper","scissors"]//this is an array, it is like a list that we can work with. in this case it hodls the computers choices.
const winners = [];//we are defining an empty array to use later

function game() {
    //play the game
    //play 5 rounds
    //console based
    for (let i = 1;i<=5;i++) {
        playRound(i);//we passed i in as a parameter, set to the round variable defined below.
    }
    logWins();
}

function playRound(round) {//this function plays a round, notice how round is set here as a variable.
    //check winner
    //display results?
    const playerSelection = playerChoice(); //setting this variable to the function gives us the result as defined
    const computerSelection = computerChoice(); //same here, we are defining variables/inputs for use in the function
    const winner = checkWinner(playerSelection, computerSelection); //sets winner variable to either Tie, Player, or Computer. 
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round);
}

function playerChoice() {
    //get player input
    let input = prompt("type rock, paper, or scissors"); //prompting user for input
    while (input == null) { //this while loop ensures that the code isn't broken when null is returned (ex. pressing cancel)
        input = prompt("type rock, paper, or scissors");//if it returns null, you are prompted for another input
    }
    input = input.toLowerCase(); //sets input variable as itelf.. but lower case
    let check = validateInput(input) //sets new check variable to true/false based on outcome of function as defined
    while (check == false) { //while loop asks if check is true/false, if false it runs code 
       input = prompt("type rock, paper, or scissors! spelling matters, capitalization doesn't.");//if false input is once again assigned to a prompt
       while (input == null) { //this while loop ensures that the code isn't broken when null is returned (ex. pressing cancel)
        input = prompt("type rock, paper, or scissors");//if it returns null, you are prompted for another input
    }
       input = input.toLowerCase()//everytime input is assigned by user input it must be lowercased
       check = validateInput(input)//this runs input back through the validate function, assigning true or false to check variable. if true it ends the while loop.
    }
    return input; //the output of this function is the input variable. without this, the output is not defined. other functions relying on this info will break. function returns undefined.
}

function computerChoice() {
    //get random choice
    return choices[Math.floor(Math.random()*choices.length)] // this returns a random choice from the previously set choices array
}

function validateInput(choice) { //this function checks to see if a variable is included in the choices array
    return choices.includes(choice); //this simplifies the expression.. if choices includes the variable it will return true.. otherwise false.
}       

function checkWinner(choiceP, choiceC) { //checks winner of each game
    if(choiceP === choiceC){//is it a tie?
        return "Tie";
    } else if(//did the player win?
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
    ) {
        return "Player";
    } else {//if neither are true then the computer must have one
        return "Computer";
    }  
}

function logWins() {
    let playerWins = winners.filter(item => item == "Player").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    let ties = winners.filter(item => item == "Tie").length;
    console.log(`Results:
    Player Wins: ${playerWins}
    Computer Wins: ${computerWins}
    Ties: ${ties}
    - - - - - - - - - - - - - - - - `)
}

function logRound(playerChoice,computerChoice,winner,round) {
    console.log(
    `Round: ${round}
    Player Chose: ${playerChoice}
    Computer Chose: ${computerChoice}
    Round Winner: ${winner}
    - - - - - - - - - - - - - - - - -`)
}

