let xturn = true;
function buttonclicked(clicked) {
	clicked = "box" + clicked;
   let elementparent = document.getElementById(clicked);
	clicked = clicked + "content";
	let element = document.getElementById(clicked);
	if (xturn) {
		if(elementparent.textContent == "") {
				element.textContent = "X";
				elementparent.className = "box x";
				switchturn();
		}
		else {
			alert ("This space is not empty!");
		}
	}
	else {
		if(elementparent.textContent == "") {
			element.textContent = "O";
			elementparent.className = "box o";
			switchturn();
		}
		else {
			alert("This space is not empty!");
		}
	}
}

function switchturn() {
	if (xturn) {
		xturn = false;
	}
	else {
		xturn = true;
	}
}

function reset() {
	let lastreset = 0;
	do {
			let currentreset = lastreset + 1;
			let resetelement = document.getElementById("box" + currentreset + "content");
			let resetelementparent = document.getElementById("box" + currentreset);
			resetelement.textContent = "";
			resetelementparent.className = "box";
			lastreset++;
			xturn = true;
		}
	while (lastreset < 10);
}
//Created by TinsellyCone