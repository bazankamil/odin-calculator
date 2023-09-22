/* SELECTORS */
//Maintenance
const buttonElementMRC = document.querySelector(".button-MRC");
const buttonElementMPlus = document.querySelector(".button-MPlus");
const buttonElementMMinus = document.querySelector(".button-MMinus");
const buttonElementCE = document.querySelector(".button-CE");
const buttonElementOnOff = document.querySelector(".button-ON-OFF");
//Numbers
const buttons = document.querySelectorAll(".button-number");
//Rest
const buttonElementPercentage = document.querySelector(".button-percentage");
const buttonElementRoot = document.querySelector(".button-root");
const buttonElementMultiplication = document.querySelector(
  ".button-multiplication"
);
const buttonElementDivision = document.querySelector(".button-division");
const buttonElementPlus = document.querySelector(".button-plus");
const buttonElementMinus = document.querySelector(".button-minus");
const buttonElementDot = document.querySelector(".button-dot");
const buttonElementEmpty = document.querySelector(".button-empty");
const buttonElementEqual = document.querySelector(".button-equal");
const divElementResultScreen = document.querySelector(".result__screen");

//Event listeners

buttons.forEach((item) => {
  item.addEventListener("click", function () {
    divElementResultScreen.innerText += this.innerText;
  });
});

//Variables
let variable1;
let variable2;
let operator;
let display;

//Calculator funcions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(variable1, variable2, operator) {
  return function (variable1, variable2) {};
}

/*TODO:
-event listenery na click- update czytnika
-zapisywana liczba w var1 kiedy nacisnie sie plus- wtedy war 1 przekazywane jako a do funkcji add 
-listener na operatory jesli jakis nacisniety to liczba z wyswietlacza wskakuje do var 1 i czysci wyswietlacz
-kiedy nacisnie sie rowna sie to var1 i var2 przekazane odpowiedniej funkcji i wynik przekazywany do wyswietlacza

-klasy z numerami pousuwac
-
*/
