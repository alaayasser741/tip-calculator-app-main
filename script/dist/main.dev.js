"use strict";

var _this = void 0;

var billNum = document.getElementById("bill");
var customTip = document.getElementById("custom-tip");
var numPeople = document.getElementById("num-people");
var resetBtn = document.getElementById("reset");
var tipAmount = document.getElementById("tip-amount");
var tipTotal = document.getElementById("tip-total");
var selectTip = document.querySelectorAll("#select-tip li");
var cantZero = document.getElementById("cant-zero"); // Select tip active class style

selectTip.forEach(function (el) {
  _this.onclick = function () {
    calcTip();
  }; // el.addEventListener("click", calcTip)


  el.addEventListener("click", addActiveTip);
  el.addEventListener("click", function () {
    tipValue = parseFloat(el.innerHTML) / 100;
  });
});

function addActiveTip() {
  var _this2 = this;

  selectTip.forEach(function (li) {
    li.classList.remove("active");

    _this2.classList.add("active");
  });
} // Input Values


billNum.addEventListener("input", function () {
  if (billNum.value != 0) {
    resetBtn.disabled = false;
  } else if (numPeople.value == 0) {
    resetBtn.disabled = true;
  }

  billInput();
  calcTip();
});
numPeople.addEventListener("input", function () {
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
customTip.addEventListener("input", tipInputCustom); // init value for inputs

billNum.value = "0";
numPeople.value = "1";
tipAmount.innerHTML = "$" + 0.0.toFixed(2);
tipTotal.innerHTML = "$" + 0.0.toFixed(2);
var tipValue = 0.15;
var billValue = 0;
var peopleValue = 1;

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
  selectTip.forEach(function (el) {
    el.classList.remove("active");
  });
  calcTip();
}

function calcTip() {
  if (peopleValue >= 1) {
    var tip = billValue * tipValue / peopleValue;
    var total = billValue / peopleValue + tip;
    tipAmount.innerHTML = "$" + tip.toFixed(2);
    tipTotal.innerHTML = "$" + total.toFixed(2);
  }
} // Reset


function reset() {
  numPeople.value = 1;
  billNum.value = 0;
  customTip.value = "";
  billInput();
  peopleInput();
  resetBtn.disabled = true;
}

resetBtn.addEventListener("click", reset);