let buttonnum = 0;
let button = "";
let random = getRandomNum(0,3);
function buttonpress (buttonnum) {
    if(buttonnum == 3) {
        button = "scissors";
    }
    else if(buttonnum == 2) {
        button = "paper";
    }
    else if(buttonnum == 1) {
        button = "rock";
    }
    if (random == buttonnum) {
        alert("You Win!");
    }
    else {
        alert("You Lose...")
    }
}
function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }  