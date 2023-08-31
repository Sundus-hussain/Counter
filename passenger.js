

let count=document.getElementById("count");
let inc=document.getElementById("inc");
let dec=document.getElementById("dec");

//add and call all the buttons 

let countOne=0;

inc.addEventListener('click', function(){
    let countFinal=countOne++;
    count.textContent=countFinal;
})

dec.addEventListener('click', function(){
    let countFinalDec=countOne--;
    count.textContent=countFinalDec;
});