total = 0;
num = "0";
point = "";
sym = "";

function calc_run(btn) {
	if (!isNaN(btn)) {
	if (sym == "=") {
		total = 0;
		sym = "";
	}
	if (!isNaN(point)) {
	if (num == "0") {
		num = ""+btn;
	} else {
		num += ""+btn;
	}
	} else {
		num = ""+btn;
	}
	document.getElementById("output").innerHTML = num;
	} else {
		if (!isNaN(point)) {
		total = eval(total + sym + num);
		num = "0";
		document.getElementById("output").innerHTML = total;
	}
	sym = btn;
	}
	document.getElementById("type").innerHTML = sym;
	point = btn;
}
