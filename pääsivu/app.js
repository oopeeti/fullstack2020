const harjH2 = document.getElementById("lokakuu");
const colorBtn = document.getElementById("color-btn");
const paraBtn = document.getElementById("para-btn");
const harjTeksti = document.getElementById("alateksti");
const divBtn = document.getElementById("div-btn");
const divTxt = document.getElementById("alateksti");
const resetBtn = document.getElementById("reset-btn");

colorBtn.addEventListener("click", () => {
  harjH2.style.color = "rgb(161, 32, 32)";
});

paraBtn.addEventListener("click", () => {
  let date = new Date();
  harjTeksti.textContent = date.toDateString();
  harjTeksti.style.color = "yellow";
});

divBtn.addEventListener("click", () => {
  divTxt.style.backgroundColor = "green";
});

resetBtn.addEventListener("click", () => {
  harjH2.style.color = "";
  harjTeksti.textContent = "";
  harjTeksti.style.color = "";
  divTxt.style.backgroundColor = "";
});

// 6.10.2020 - Laskut

const vastaus = document.getElementById("vastaus");
const lasku1 = document.getElementById("lasku1-input"); // lasku 1 input
const lasku2 = document.getElementById("lasku2-input"); // lasku 2 input
const addBtn = document.getElementById("add-btn"); // + nappi
const subBtn = document.getElementById("sub-btn"); // - nappi
const divideBtn = document.getElementById("divide-btn"); // nappi
const multiplyBtn = document.getElementById("multiply-btn"); // * nappi 

addBtn.addEventListener("click", () => {
  const num1 = parseInt(lasku1.value);
  const num2 = parseInt(lasku2.value);
  vastaus.innerHTML = `Vastaus: ${num1} + ${num2} = ${num1 + num2}`
});

subBtn.addEventListener("click", () => {
  const num1 = parseInt(lasku1.value);
  const num2 = parseInt(lasku2.value);
  vastaus.innerHTML = `Vastaus: ${num1} - ${num2} = ${num1 - num2}`
});

divideBtn.addEventListener("click", () => {
  const num1 = parseInt(lasku1.value);
  const num2 = parseInt(lasku2.value);
  vastaus.innerHTML = `Vastaus: ${num1} / ${num2} = ${num1 / num2}`
});

multiplyBtn.addEventListener("click", () => {
  const num1 = parseInt(lasku1.value);
  const num2 = parseInt(lasku2.value);
  vastaus.innerHTML = `Vastaus: ${num1} * ${num2} = ${num1 * num2}`
});






