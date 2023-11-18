function Sum() {
    var n = parseInt(document.getElementById("n").value);
    var m = parseInt(document.getElementById("m").value);
    var finalSum = 0;
    for (var i = n; i <= m; i++) {
      if (!(i % 2)) {
        finalSum += i;
      }
    }
    alert(finalSum);
  }