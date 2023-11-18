function max(){
    var a = parseInt(document.getElementById("num1").value) || 0;
    var b = parseInt(document.getElementById("num2").value) || 0;
    var c = parseInt(document.getElementById("num3").value) || 0;

    var end = Math.max(a, b, c);

    if (a === 0 && b === 0 && c === 0) {
    alert("Input at least one number");
  } else {
    alert(end);
  }
}

var submit = document.getElementById("submit");

submit.addEventListener('click', () => max());