ans = 0;
num = "0";
key = "";
kigou = "";

function calc_run(btn) {
	if (!isNaN(btn)) {
		if (kigou == "=") {
			ans = 0;
			kigou = "";
		}
		if (!isNaN(key)) {
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
		if (!isNaN(key)) {
			ans = eval(ans + kigou + num);
			num = "0";
			document.getElementById("output").innerHTML = ans;
		}
		kigou = btn;
	}
	document.getElementById("type").innerHTML = kigou;
	key = btn;
}

function calc_period() {
	if (num.indexOf(".") < 0) num += ".";
	key = 0;
	document.getElementById("output").innerHTML = num;
}

function calc_equal() {
	document.title = key + "=" + ":" + ans + "[" + kigou + "]" + num;
	if (key == "=") {
		ans = 0;
		key = "";
	} else {
		if (kigou == "") ans = num;
		else ans = eval(ans + kigou + num);
		key = "=";
	}
	num = "0";
	kigou = key;
	document.getElementById("output").innerHTML = ans;
	document.getElementById("type").innerHTML = key;
}
