const harjH2 = document.getElementById("lokakuu");
const colorBtn = document.getElementById("color-btn");
const paraBtn = document.getElementById("para-btn");
const harjTeksti = document.getElementById("alateksti");
const divBtn = document.getElementById("div-btn");
const divTxt = document.getElementById("teksti");
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



