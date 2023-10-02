/* SELECTORS */
//Maintenance
const buttonElementMRC = document.querySelector(".button-MRC");
const buttonElementMPlus = document.querySelector(".button-MPlus");
const buttonElementMMinus = document.querySelector(".button-MMinus");
const buttonElementCE = document.querySelector(".button-CE");
const buttonElementOnOff = document.querySelector(".button-ON-OFF");
//Numbers
const buttons = document.querySelectorAll(".button-number");
//Operators
const operators = document.querySelectorAll(".button-operator");
//Rest
const buttonElementPercentage = document.querySelector(".button-percentage");
const buttonElementRoot = document.querySelector(".button-root");
const buttonElementDot = document.querySelector(".button-dot");
const buttonElementEmpty = document.querySelector(".button-empty");
const buttonElementEqual = document.querySelector(".button-equal");
const divElementResultScreen = document.querySelector(".result__screen");

//Variables
let variable1 = 0;
let variable2;
let operator;
let result;
//Event listeners button push

buttons.forEach((item) => {
  item.addEventListener("click", function () {
    divElementResultScreen.innerText += this.innerText;
  });
});

//Event listener operators

operators.forEach((item) => {
  item.addEventListener("click", function () {
    operator = this.innerText;
    variable1 = divElementResultScreen.innerText;
    divElementResultScreen.innerText = "";
  });
});

//Equal

buttonElementEqual.addEventListener("click", function () {
  if (variable1 != 0 && variable1 != "") {
    variable2 = divElementResultScreen.innerText;
    result = operate(variable1, variable2, operator);
    if (result) {
      divElementResultScreen.innerText = result;
    }
  }
});

//Clear
buttonElementCE.addEventListener("click", function () {
  divElementResultScreen.innerText = "";
});

//Calculator funcions
function add(a, b) {
  return Number(a) + Number(b);
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
  if (operator == "+") {
    return add(variable1, variable2);
  } else if (operator == "-") {
    return subtract(variable1, variable2);
  } else if (operator == "x") {
    return multiply(variable1, variable2);
  } else if (operator == "/") {
    return divide(variable1, variable2);
  }
}

/*TODO:

-ciagi dzialan: jesli var 1 i var2 maja wartosc to kolejny operant dziala jak rowna sie i zapisuje wynik w var1 var1 rowna sie result
-zaokragla do 15 po przecinku
-jesli result wiekszy niz 15 liczb to albo ucinac albo komunikat, ze za duza liczba
-rowna sie bez var1 i var2- nic nie robic powinno
-rowna sie dziala tylko jak oba var maja wartosc
-dzielenie przez zero powinno dac jakis komunikat smieszkowaty
-dodac kropke i dzialania na ulamkach, ale kiedy jest juz jedna kropka nie pozwalaj na wiecej
-zamienic pusty na backspace i usuwac ostatnia wpisana liczbe


-klasy z numerami pousuwac
-on/off dezaktywuje kalkulator (kolory wyszarza) i nie da sie nic kliknac procz on
-niedzialajace guziki wyszarzyc

-z czysta lista TODO- refaktor, pousuwac nieuzywany kod i udostepnic
*/
