"use strict";
const converterTitle = document.querySelector(".converter__title");
let select = document.querySelector(".select"),
  usdInput = document.getElementById("usd"),
  rubInput = document.getElementById("rub"),
  button = document.getElementById("btn"),
  inUsdInput = document.getElementById("inUsd"),
  inRubInput = document.getElementById("inRub"),
  btn = document.querySelector(".button"),
  converterText = document.querySelector(".converter__text"),
  input = document.querySelectorAll("input");

input.forEach((item) => {
  item.addEventListener("input", () => {
    item.value = item.value.replace(/[^0-9\.]/g, "");
  });
});

select.addEventListener("change", () => {
  rubInput.value = "";
  usdInput.value = "";
  inUsdInput.value = "";
  inRubInput.value = "";
  if (select.value === "75") {
    return select.value;
  } else if (select.value === "95") {
    rubInput.textContent = "";
    return select.value;
  }
});

button.addEventListener("click", () => {
  rubInput.value = +select.value * +usdInput.value;
});
btn.addEventListener("click", () => {
  if (select.value === "95") {
    converterText.textContent = "Евро";
  }
  inUsdInput.value = +inRubInput.value / +select.value;
});
