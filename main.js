function c() {
    var s = 0;
    var a = parseInt(document.getElementById('o').value);
    var b = parseInt(document.getElementById('b').value);
    var d = document.getElementById('d').value;
    if (d == "*") {
        s = a * b;
        alert(s);
    }
    else if (d == "/") {
        s = a / b;
        alert(s);
    }
    else if (d == "-") {
        s = a - b;
        alert(s);
    }
    else if (d == "+") {
        s = a + b;
        alert(s);
    }
    else {
        alert("error!")
    }
} 