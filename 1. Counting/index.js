// let username; //FIRST
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

const increaseBtn = document.getElementById("myIncrease");
const decreaseBtn = document.getElementById("myDecrease");
const resetBtn = document.getElementById("myReset");
const countLabel = document.getElementById("myCounter");
let count = 0;

increaseBtn.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    countLabel.textContent = count;
    
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    
}