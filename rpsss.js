let userScore= 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const cntUserScore= document.querySelector("#user-score");
const cntCompScore= document.querySelector("#comp-score")

const getCompChoice= ()=>{
    const options= ["rock", "paper", "scissors"];
    const randomIndex= Math.floor(Math.random()*3);
    return options[randomIndex];
}

const draw= ()=>{
    msg.innerText= "Draw! Play again.";
    msg.style.backgroundColor= "#2E2D4D";
}

let userwin= true;

const showWinner=(userwin, userChoice, computerChoice)=>{
    if(userwin){
        userScore++;
        cntUserScore.innerText= userScore;
    msg.innerText= `You win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        cntCompScore.innerText= compScore;
    msg.innerText= `You lost! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor= "red";
    }
}

const playGame= (userChoice)=>{
    let computerChoice= getCompChoice();  
    if(userChoice== computerChoice)
        draw();
    else if(userChoice== "rock"){
            userwin= computerChoice=="paper"? false :true;
    }
    else if(userChoice=="paper"){
        userwin= computerChoice=="scissors"? false:true;
    }
    else
    userwin= computerChoice=="rock"? false:true;
    showWinner(userwin, userChoice, computerChoice);
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})