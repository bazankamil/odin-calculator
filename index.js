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
const buttonElementBck = document.querySelector(".button-bck");
const buttonElementEqual = document.querySelector(".button-equal");
const divElementResultScreen = document.querySelector(".result__screen");

//Variables
let variable1;
let variable2;
let operator;
let result;

//Event listeners button push

buttons.forEach((item) => {
  item.addEventListener("click", function () {
    if (divElementResultScreen.innerText === "Too big!") {
      divElementResultScreen.innerText = this.innerText;
    } else {
      divElementResultScreen.innerText += this.innerText;
    }

    if (divElementResultScreen.innerText.length > 15) {
      divElementResultScreen.innerText = "Too big!";
    }
  });
});

buttonElementBck.addEventListener("click", function () {
  divElementResultScreen.innerText = divElementResultScreen.innerText.slice(
    0,
    -1
  );
});

//Event listener operators

operators.forEach((item) => {
  item.addEventListener("click", function () {
    if (variable1 >= 0) {
      result = operate(variable1, divElementResultScreen.innerText, operator);
      operator = this.innerText;
      variable1 = result;
      divElementResultScreen.innerText = "";
    } else {
      operator = this.innerText;
      variable1 = divElementResultScreen.innerText;
      divElementResultScreen.innerText = "";
    }
  });
});

//Equal

buttonElementEqual.addEventListener("click", function () {
  if (variable1 != 0 && variable1 != "") {
    variable2 = divElementResultScreen.innerText;
    result = operate(variable1, variable2, operator);
    if (result) {
      if (result === "Bingo") {
        divElementResultScreen.innerText = "Bingo!";
      } else if (result > 1e15) {
        divElementResultScreen.innerText = "Too big!";
      } else {
        divElementResultScreen.innerText = parseFloat(result.toFixed(3));
      }
    }
  }
});

//Clear
buttonElementCE.addEventListener("click", function () {
  divElementResultScreen.innerText = "";
  variable1 = undefined;
  variable2 = undefined;
  operator = undefined;
  result = undefined;
});

//Calculator funcions
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (b == 0) {
    return "Bingo";
  }
  return Number(a) / Number(b);
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


-dodac kropke i dzialania na ulamkach, ale kiedy jest juz jedna kropka nie pozwalaj na wiecej
-jesli nacisniety rowna sie i wyswietli sie result, to wtedy result wpada do var1 zeby moc dalej liczyc

-on/off dezaktywuje kalkulator (kolory wyszarza) i nie da sie nic kliknac procz on
-niedzialajace guziki wyszarzyc

-z czysta lista TODO- refaktor, pousuwac nieuzywany kod i udostepnic
*/
