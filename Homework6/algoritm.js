let n=100;

for (let i = 1; i<= n; i++) {
    if(i % 3 === 0){
        document.getElementById ("rez_3").innerHTML += " " + i;
    }
}

for (let i = 5; i<= n; i++) {
    if(i % 5 === 0){
        document.getElementById ("rez_5").innerHTML +=" "+ i;
    }

}
