"use strict";

var screen = document.querySelector("#screen");

function delete_entry() {// screen.innerHTML.slice(0, -1);
  // fix this
}

function ac() {
  screen.innerHTML = "";
}

function add() {
  screen.innerHTML += "+";
}

function subtract() {
  screen.innerHTML += "-";
}

function divide() {
  screen.innerHTML += "/";
}

function multiply() {
  screen.innerHTML += "*";
}

function decimal_point() {
  // some kind of if statement needed here to stop 2 decimals being used. 
  screen.innerHTML += ".";
}

function equals() {
  screen.innerHTML += "=<br>";
  screen.contentWindow.location.reload(true);
}

function one() {
  screen.innerHTML += "1";
}

function two() {
  screen.innerHTML += "2";
}

function three() {
  screen.innerHTML += "3";
}

function four() {
  screen.innerHTML += "4";
}

function five() {
  screen.innerHTML += "5";
}

function six() {
  screen.innerHTML += "6";
}

function seven() {
  screen.innerHTML += "7";
}

function eight() {
  screen.innerHTML += "8";
}

function nine() {
  screen.innerHTML += "9";
}

function zero() {
  screen.innerHTML += "0";
}

document.querySelector("#delete").addEventListener("click", delete_entry);
document.querySelector("#ac").addEventListener("click", ac);
document.querySelector("#add").addEventListener("click", add);
document.querySelector("#subtract").addEventListener("click", subtract);
document.querySelector("#divide").addEventListener("click", divide);
document.querySelector("#multiply").addEventListener("click", multiply);
document.querySelector("#decimal_point").addEventListener("click", decimal_point);
document.querySelector("#equals").addEventListener("click", equals);
document.querySelector("#one").addEventListener("click", one);
document.querySelector("#two").addEventListener("click", two);
document.querySelector("#three").addEventListener("click", three);
document.querySelector("#four").addEventListener("click", four);
document.querySelector("#five").addEventListener("click", five);
document.querySelector("#six").addEventListener("click", six);
document.querySelector("#seven").addEventListener("click", seven);
document.querySelector("#eight").addEventListener("click", eight);
document.querySelector("#nine").addEventListener("click", nine);
document.querySelector("#zero").addEventListener("click", zero);