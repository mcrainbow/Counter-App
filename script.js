"use strict";

let number = 0;
const count = document.querySelector(".count");
const addBut = document.querySelector(".add");
const subtractBut = document.querySelector(".subtract");
const resetBut = document.querySelector(".reset");

subtractBut.addEventListener("click", () => {
  count.innerHTML = --number;
});
addBut.addEventListener("click", () => {
  count.innerHTML = ++number;
});
resetBut.addEventListener("click", () => {
  number = 0;
  count.innerHTML = number;
});
