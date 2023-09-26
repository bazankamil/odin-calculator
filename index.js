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

//Operator

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
-Dodac logo (stanczyka i logo odina) a na prawo dwa guziki- work i nie work
//wybrac dzialajace guziki, na reszte dac nie dzialajace kolory
//query selector all na operatory, ale tylko dzialajace
//zmienna operator na 0, ale kiedy nacisniety button to otrzymuje wartosc "add, substract etc"
//kiedy nacisniety operator to wartosc wyswietlacza zapisywana w var1 a wyswietlacz resetowany

//rowna sie
//jesli nacisniete rowna sie to zawartosc result screen zapisywana w var 2,
//display usuwany, wartosci przekazyane do funkcji i wyswietlany wynik

-klasy z numerami pousuwac
-
*/
