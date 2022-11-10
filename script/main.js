const billNum = document.getElementById("bill");
const customTip = document.getElementById("custom-tip");
const numPeople = document.getElementById("num-people");
const resetBtn = document.getElementById("reset");
const tipAmount = document.getElementById("tip-amount");
const tipTotal = document.getElementById("tip-total");
let selectTip = document.querySelectorAll("#select-tip li");
const cantZero = document.getElementById("cant-zero");

// Select tip active class style
selectTip.forEach((el) => {
  this.onclick = function () {
    calcTip();
  };
  // el.addEventListener("click", calcTip)
  el.addEventListener("click", addActiveTip);
  el.addEventListener("click", () => {
    tipValue = parseFloat(el.innerHTML) / 100;
  });
});
function addActiveTip() {
  selectTip.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
// Input Values
billNum.addEventListener("input", () => {
  if (billNum.value != 0) {
    resetBtn.disabled = false;
  } else if (numPeople.value == 0) {
    resetBtn.disabled = true;
  }
  billInput();
  calcTip();
});

numPeople.addEventListener("input", () => {
  if (numPeople.value != 1) {
    resetBtn.disabled = false;
  } else if (numPeople.value == 1) {
    resetBtn.disabled = true;
  }
  if (numPeople.value == 0) {
    cantZero.style.display = "block";
    numPeople.style.outlineColor = "#c27777";
  } else {
    cantZero.style.display = "none";
    numPeople.style.outlineColor = "var(--Strong-cyan)";
  }
  peopleInput();
  calcTip();
});

customTip.addEventListener("input", tipInputCustom);
// init value for inputs
billNum.value = "0";
numPeople.value = "1";
tipAmount.innerHTML = "$" + (0.0).toFixed(2);
tipTotal.innerHTML = "$" + (0.0).toFixed(2);
let tipValue = 0.15;
let billValue = 0;
let peopleValue = 1;

function billInput() {
  if (billNum.value == "") {
    billValue = 0;
  } else {
    billValue = parseFloat(billNum.value);
  }
}
function peopleInput() {
  peopleValue = parseFloat(numPeople.value);
}
function tipInputCustom() {
  tipValue = parseFloat(customTip.value / 100);
  selectTip.forEach((el) => {
    el.classList.remove("active");
  });
  calcTip();
}
function calcTip() {
  if (peopleValue >= 1) {
    let tip = (billValue * tipValue) / peopleValue;
    let total = billValue / peopleValue + tip;
    tipAmount.innerHTML = "$" + tip.toFixed(2);
    tipTotal.innerHTML = "$" + total.toFixed(2);
  }
}

// Reset
function reset() {
    numPeople.value = 1;
    billNum.value = 0;
    customTip.value = "";
    billInput();
    peopleInput();
    resetBtn.disabled=true;
}
resetBtn.addEventListener("click", reset);
