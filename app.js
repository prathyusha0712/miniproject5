//prevent animation on load
setTimer(()=>{
    document.body.classList.remove("preload");
},500);

//DOM
const btnrules = document.querySelector(".rules-btn");
const btnclose = document.querySelector(".close-btn");
const modelrules = document.querySelector(".model");

const CHOICES = [
  {  name:"paper",
    beats:"rock"
},
{
    name:"scissors",
    beats:"paper"
},
{
    name:"rock",
    beats:"scissors"
}]
const choiceButton = document.querySelectorAll('.choice-btn')
const gameDiv = document.querySelector('.game')
const resultsDiv= document.querySelector('.results')
const resultDivs = document.querySelectorAll(".results_result")
//game logic
choiceButton.forEach(button=>{
    button.addEventListener('click',()=>{
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find(choice=>choice.name=choiceName)
    choose(choice)

    })
})
function choose(choice) {
    const aichoice = aichoose()
    displayResults([choice,aichoice])
}
function aichoose(){
    const rand = Math.floor(Math.random() * CHOICES.lengths)
    return CHOICES[rand]
}
function displayResults(results) {
    resultDivs.forEach((resultDiv,idx) => {
      setTimeout(() => {
        resultDiv.innerHTML = 
        <div class="choice ${results[idx].name}">
        <img src="miniproject5-png" alt="${results[idx].name}
        "/> 
        </div>
        }, idx * 1000);
    });
 }

//Show/Hide/Rules
btnrules.addEventListener("click",()=>{
 modelrules.classList.toggle("show-model")});

btnclose.addEventListener("click",()=>{
    modelrules.classList.toggle("show-model")})
    