let userScore = 0;
let comScore = 0;
let game = document.querySelectorAll(".button");
let message = document.querySelector("#msg");
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");


const winning = (userwin, gen, player) => {
  if (userwin === true) {
    console.log("you win !$");
    //  user.innerText = userScore++;
    userScore++;
    user.innerText = userScore;

    message.innerText = `You win! your  ${player} beats ${gen}`;
    message.style.backgroundColor = "green";
    message.style.color = "lightgreen"


  } 
  else {
    console.log("you lose!");
    comScore++;
    comp.innerText = comScore;
    message.innerText = ` You loose! ${gen} beats your ${player}`;
    message.style.backgroundColor = "red";
    message.style.color = "white";


  }
}
game.forEach((turn) => {
  turn.addEventListener("click", () => {
    let gen = computer();
    let player = turn.getAttribute("id");
    console.log(player);
    console.log(gen);


    //draw condtion
    if (player === gen) {
      console.log("draw");
      message.innerText = "draw";
      message.style.backgroundColor = "black";
      message.style.color = "white";
    }
    else {
      let userwin = true;
      if (player === "rock") {
        // paper scissor
        userwin = gen === "paper" ? false : true;
      } else if (player === "paper") {
        // rock scissor
        userwin = gen === "scissor" ? false : true;
      } else {
        //rock paper
        userwin = gen === "rock" ? false : true;
      }
      winning(userwin, gen, player);
    }


  });
})




const computer = () => {
  const move = ["rock", "paper", "scissor"];
  let a = Math.round(Math.random() * 2);
  return move[a];

}
