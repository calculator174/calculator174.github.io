var el = document.getElementById('id');
var p = "";
function one() {
	p = p + "1";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
}
function two() {
	p = p + "2";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
}

function tri() {
	p = p + "3";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}	
}

function chetre() {
	p = p + "4";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}	
}

function pat() {
	p = p + "5";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}	
}

function six() {
	p = p + "6";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}	
}

function seven() {
	p = p + "7";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
}

function vosem() {
	p = p + "8";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
}

function nite() {
	p = p + "9";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
}

function zero() {
	p = p + "0";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
}

function plus() {
	p = p + "+";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
	document.getElementById('dei').style.display = 'none';
	document.getElementById('deis').style.display = 'none';
	document.getElementById('deist').style.display = 'none';
	document.getElementById('deistv').style.display = 'none';
}

function min() {
	p = p + "-";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
	document.getElementById('dei').style.display = 'none';
	document.getElementById('deis').style.display = 'none';
	document.getElementById('deist').style.display = 'none';
	document.getElementById('deistv').style.display = 'none';
}
function result() {
	p = p + "=";
	if (p.length == 27) {
		p = p + "\n";
	}
	if (p.indexOf("+") > -1 )  {
		var arr = p.split('+');
		var num = parseInt(arr[0], 10) +  parseInt(arr[1], 10);
		p = p + num; 
		el.textContent = p;
		arr = "";
		num = 0;
	}
	if (p.indexOf("-") > -1 )  {
		var arr = p.split('-');
		var num = parseInt(arr[0], 10) -  parseInt(arr[1], 10);
		p = p + num; 
		el.textContent = p;
		arr = "";
		num = 0;
	}
	
	if (p.indexOf("x") > -1 )  {
		var arr = p.split('x');
		var num = parseInt(arr[0], 10) *  parseInt(arr[1], 10);
		p = p + num; 
		el.textContent = p;
		arr = "";
		num = 0;
	}
	
	if (p.indexOf("/") > -1 )  {
		var arr = p.split('/');
		var num = parseInt(arr[0], 10) /  parseInt(arr[1], 10);
		p = p + num; 
		el.textContent = p;
		arr = "";
		num = 0;
	}
	document.getElementById('dei').style.display = 'none';
	document.getElementById('deis').style.display = 'none';
	document.getElementById('deist').style.display = 'none';
	document.getElementById('deistv').style.display = 'none';
	document.getElementById('one').style.display = 'none';
	document.getElementById('two').style.display = 'none';
	document.getElementById('tri').style.display = 'none';
	document.getElementById('chetre').style.display = 'none';
	document.getElementById('pat').style.display = 'none';
	document.getElementById('six').style.display = 'none';
	document.getElementById('seven').style.display = 'none';
	document.getElementById('vosem').style.display = 'none';
	document.getElementById('nite').style.display = 'none';
	document.getElementById('zero').style.display = 'none';
	document.getElementById('result').style.display = 'none';
	document.getElementById('clear').style.width = '26%';
}

function x() {
	p = p + "x";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
	document.getElementById('dei').style.display = 'none';
	document.getElementById('deis').style.display = 'none';
	document.getElementById('deist').style.display = 'none';
	document.getElementById('deistv').style.display = 'none';
}

function delit() {
	p = p + "/";
	el.textContent = p;
	if (p.length == 27) {
		p = p + "\n";
	}
	document.getElementById('dei').style.display = 'none';
	document.getElementById('deis').style.display = 'none';
	document.getElementById('deist').style.display = 'none';
	document.getElementById('deistv').style.display = 'none';
}