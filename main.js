const result = document.getElementById("result");
let resultDisplayed = false;

function getResult(value) {
  if (value === "=") {
    const expression = result.value;
    if (expression.includes("/0")) {
      result.value = "Eroare";
    } else {
      result.value = eval(expression);
    }
    resultDisplayed = true;
  } else {
    if (resultDisplayed) {
      result.value = "";
      resultDisplayed = false;
    }
    result.value += value;
  }
}

function clearResult() {
  result.value = "";
}

function deleteLast() {
    if (resultDisplayed) {
      result.value = "";
      resultDisplayed = false;
    } else {
      result.value = result.value.slice(0, -1);
    }
  }