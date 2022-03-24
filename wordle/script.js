let words = ["hello","later","flute","pages","shape","night"];
let randomword = Math.floor(Math.random() * (words.length + 1));
let row = 1;
let submitted = false;
let elements = [document.getElementById("box" + row + ",1"), document.getElementById("box" + row + ",2"), document.getElementById("box" + row + ",3"), document.getElementById("box" + row + ",4"), document.getElementById("box" + row + ",5")];
let correct = ["H","E","L","L","O"];
let input = ["","","","",""];
let correctamount = 0;
let currentelement;
let position = 0;
document.getElementById("streak").textContent = "Streak: " + localStorage.getItem("streak");
chooseword();
/*let debug = document.getElementById("debug");*/
function typed(position) {
	boxposition = "box" + row + "," + position;
   	currentelement = document.getElementById(boxposition);
	input[position-1] = currentelement.value.charAt(0).toUpperCase();
	currentelement.value = input[position-1].toUpperCase();
	/*debug.textContent = input[position-1].toUpperCase();*/
	if(position < 5) {
		elements[position].focus();
	}
	else {
		enter();
		elements[position].focus();
	}
}
function enter() {
	position = 1;
	if (submitted == false) {
		do {
			if (input[position-1].toUpperCase() == correct[position-1]) {
				elements[position-1].className = "box green";
				correctamount = correctamount + 1;
				/*debug.textContent = correctamount;*/
			}
			else if (input[position-1] == correct[0] || input[position-1] == correct[1] || input[position-1] == correct[2] || input[position-1] == correct[3] || input[position-1] == correct[4] || input[position-1] == correct[5] || input[position-1] == correct[6]) {
				/*debug.textContent = "Or!";*/
				elements[position-1].className = "box yellow";
			}
			else {
				elements[position-1].className = "box red";
				/*debug.textContent = correct[2];*/
			}
			elements[position-1].disabled = true;
			position = position + 1;
		} while (position <= 5);
		row = row + 1;
		elements = [document.getElementById("box" + row + ",1"), document.getElementById("box" + row + ",2"), document.getElementById("box" + row + ",3"), document.getElementById("box" + row + ",4"), document.getElementById("box" + row + ",5")];
		if (correctamount == 5 && localStorage.getItem("streak") !== "") {
			let streak = localStorage.getItem("streak");
			localStorage.setItem("streak", (parseInt(streak) + 1));
			document.getElementById("streak").textContent = "Streak: " + localStorage.getItem("streak");
			setTimeout(() => { document.location.reload(); }, 5000);
			submitted = true;
		}
		else if (correctamount == 5) {
			localStorage.setItem("streak", 1);
			document.getElementById("streak").textContent = "Streak: " + localStorage.getItem("streak");
			setTimeout(() => { document.location.reload(); }, 5000);
			submitted = true;
		}
		else if (row == 5) {
			localStorage.setItem("streak", 0);
			document.getElementById("streak").textContent = "Streak: " + localStorage.getItem("streak");
		}
	}
	
}
function chooseword() {
	words[randomword] = words[randomword].toUpperCase();
	correct[0] = words[randomword].charAt(0).toUpperCase();
	correct[1] = words[randomword].charAt(1).toUpperCase();
	correct[2] = words[randomword].charAt(2).toUpperCase();
	correct[3] = words[randomword].charAt(3).toUpperCase();
	correct[4] = words[randomword].charAt(4).toUpperCase();
}

//Created by TinsellyCone