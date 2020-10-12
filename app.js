// 5.10.2020
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
/*********************PÄIVÄMÄÄRÄ LOPETUS*************************/

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
/*********************LASKURI LOPETUS*************************/

// 9.10.2020 - Lämpömittari
const lampomittari = document.getElementById("lampomittari");
const testibuttoni = document.getElementById("testi");
const lampoVari = document.getElementById("heat-div");
const celsius = document.getElementById("heat");


lampomittari.addEventListener("input", () => {
  const lampo = lampomittari.value;
  celsius.innerText = `${lampo} ℃`;
  
  if (lampo === 0) {
    lampoVari.style.backgroundColor = "rgb(255,255,255)";
    // Kuuma
  } else if (lampo > 0 && lampo < 25) {
    lampoVari.style.backgroundColor = "rgb(205,92,92)";
  } else if (lampo > 25 && lampo < 50) {
    lampoVari.style.backgroundColor = "rgb(178,34,34)";
  } else if (lampo > 50 && lampo < 75) {
    lampoVari.style.backgroundColor = "rgb(139,0,0)";
  } else if (lampo > 75) {
    lampoVari.style.backgroundColor = "rgb(255,0,0)";
    // Kylmä
  } else if (lampo < 0 && lampo > -25) {
    lampoVari.style.backgroundColor = "rgb(176,224,230)";
  } else if (lampo < 25 && lampo > -50) {
    lampoVari.style.backgroundColor = "rgb(135,206,250)";
  } else if (lampo > 50 && lampo < -75) {
    lampoVari.style.backgroundColor = "rgb(30,144,255)";
  } else if (lampo < -75) {
    lampoVari.style.backgroundColor = "rgb(70,130,180)";
  }
});
/*********************LÄMPÖMITTARI LOPETUS*************************/

// 12.10.2020 - Noppa
const diceBtn = document.getElementById("roll-the-dice");
const noppa1 = document.getElementById("noppa-1");
const noppa2 = document.getElementById("noppa-2");

diceBtn.addEventListener("click", () => {
  const mathRandom1 = Math.floor(Math.random() * 6) + 1; // Rollaa random numeron 1-6
  const mathRandom2 = Math.floor(Math.random() * 6) + 1; // Rollaa random numeron 1-6
  const noppaTulos = document.getElementById("noppa-tulos");
  noppaTulos.innerHTML = "";
  
  if (mathRandom1 === mathRandom2) {
    noppaTulos.innerText = "Sait parit!"
   }

  // Noppa 1
  if (mathRandom1 === 1) {
   noppa1.setAttribute("src", "img/noppa/1.png");
  } else if (mathRandom1 === 2) {
    noppa1.setAttribute("src", "img/noppa/2.png");
  } else if (mathRandom1 === 3) {
    noppa1.setAttribute("src", "img/noppa/3.png");
  } else if (mathRandom1 === 4) {
    noppa1.setAttribute("src", "img/noppa/4.png");
  } else if (mathRandom1 === 5) {
    noppa1.setAttribute("src", "img/noppa/5.png");
  } else if (mathRandom1 === 6) {
    noppa1.setAttribute("src", "img/noppa/6.png");
  }

  // Noppa 2
  if (mathRandom2 === 1) {
    noppa2.setAttribute("src", "img/noppa/1.png");
   } else if (mathRandom2 === 2) {
     noppa2.setAttribute("src", "img/noppa/2.png");
   } else if (mathRandom2 === 3) {
     noppa2.setAttribute("src", "img/noppa/3.png");
   } else if (mathRandom2 === 4) {
     noppa2.setAttribute("src", "img/noppa/4.png");
   } else if (mathRandom2 === 5) {
     noppa2.setAttribute("src", "img/noppa/5.png");
   } else if (mathRandom2 === 6) {
     noppa2.setAttribute("src", "img/noppa/6.png");
   }

});
/*********************NOPPA LOPETUS*************************/







