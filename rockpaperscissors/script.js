let buttonnum = 0;
let button = "";
let random = getRandomNum(0,3);
function buttonpress (buttonnum) {
    if(buttonnum == 3) {
        button = "scissors";
        location.reload();
    }
    else if(buttonnum == 2) {
        button = "paper";
        location.reload();
    }
    else if(buttonnum == 1) {
        button = "rock";
        location.reload();
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