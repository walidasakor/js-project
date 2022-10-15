// let myAge=18
// let humanDogRatio=7
// let myDogAge= (myAge*humanDogRatio)
// console.log(myDogAge);

let countEl= document.getElementById("count-el")
let count=0

function increment(){
    count+=1
    countEl.innerText=count
}

let saveEl=document.getElementById("save-el")

function save(){
    let countStr=count + " - "
    saveEl.textContent += countStr
    countEl.innerText=0
    count=0

}