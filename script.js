const choices = ["rock" , "pepper" , "scissor"];

let userCounter = 0;
let computerCounter= 0;

const result= (player , computer) => {
    if(player===computer){
        return "barabar"
    }else if (player==="rock"){
        return computer==="pepper" ? "computer" : "player";
    }else if (player==="pepper"){
        return computer==="rock" ? "player" : "computer";
    }else{
        return computer==="rock" ? "computer" : "player";
    }
}


const finallResultWin = (resultWin) => {
    if(resultWin==="player"){
        userCounter++;
    }else if(resultWin==="computer"){
        computerCounter++;
    }
}

const play = () => {
    const userChoices = prompt("plase inter rock | pepper | scissor");

    let randomNumber = Math.floor(Math.random() * choices.length);
    const camputerChoices =choices[randomNumber] ;

    if(choices.indexOf(userChoices?.toLowerCase()) !== -1){
        console.log(`Player: ${userChoices}`);
        console.log(`compoter : ${camputerChoices}`);

        const gameResult = result(userChoices , camputerChoices);
        finallResultWin(gameResult);

    }else{
        console.log("you are cheter!")
        return;
    }

    console.log("player Result:" , userCounter);
    console.log("Comuter Result:" , computerCounter)
    console.log("***************************************");

    play();
}

play();

