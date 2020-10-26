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
/*********************PAIVAMAARA LOPETUS*************************/

// 6.10.2020 - Laskut
const vastaus = document.getElementById("vastaus");
const lasku1 = document.getElementById("lasku1-input"); // lasku 1 input
const lasku2 = document.getElementById("lasku2-input"); // lasku 2 input
const addBtn = document.getElementById("add-btn"); // + nappi
const subBtn = document.getElementById("sub-btn"); // - nappi
const divideBtn = document.getElementById("divide-btn"); // nappi
const multiplyBtn = document.getElementById("multiply-btn"); // * nappi 

addBtn.addEventListener("click", plus);
subBtn.addEventListener("click", miinus);
divideBtn.addEventListener("click", jako);
multiplyBtn.addEventListener("click", kerto);

// Funktiot
function plus(x, y) {
  x = lasku1.value;
  y = lasku2.value;
  vastaus.innerHTML = `Vastaus: ${x} + ${y} = ${x + y}`
}
function miinus(x, y) {
  x = lasku1.value;
  y = lasku2.value;
  vastaus.innerHTML = `Vastaus: ${x} - ${y} = ${x - y}`
}

function jako(x, y) {
  x = lasku1.value;
  y = lasku2.value;
  vastaus.innerHTML = `Vastaus: ${x} / ${y} = ${x / y}`
}
function kerto(x, y) {
  x = lasku1.value;
  y = lasku2.value;
  vastaus.innerHTML = `Vastaus: ${x} * ${y} = ${x * y}`
}



/*********************LASKURI LOPETUS*************************/

// 9.10.2020 - Lampomittari
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
    // Kylma
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
/*********************LAMPOMITTARI LOPETUS*************************/

// 12.10.2020 - Noppa
const diceBtn = document.getElementById("roll-the-dice");
const noppa1 = document.getElementById("noppa-1");
const noppa2 = document.getElementById("noppa-2");

diceBtn.addEventListener("click", () => {
  const mathRandom1 = Math.floor(Math.random() * 6) + 1; // Rollaa random numeron 1-6
  const mathRandom2 = Math.floor(Math.random() * 6) + 1; // Rollaa random numeron 1-6
  const noppaTulos = document.getElementById("noppa-tulos");
  noppaTulos.innerHTML = "";

  // Funktiot
  function setKuva(noppa, luku) {
    noppa.setAttribute("src", `images/noppa/${luku}.png`);
  }

  // Noppa 1
  setKuva(noppa1, mathRandom1);

  // Noppa 2
  setKuva(noppa2, mathRandom2);

    if (mathRandom1 === mathRandom2) {
    noppaTulos.innerText = "Sait parit!"
   }
});
/*********************NOPPA LOPETUS*************************/

// VALOTEHTAVA 13.10.2020

// Napit
const etuvaloToggle = document.getElementById("etuvalo-nappi").addEventListener("change", onOff);
const keskivaloToggle = document.getElementById("keskivalo-nappi").addEventListener("change", onOff);
const takavaloToggle = document.getElementById("takavalo-nappi").addEventListener("change", onOff);

// Kuvat
const etuvaloImg = document.getElementById("etuvalo-img");
const keskivaloImg = document.getElementById("keskivalo-img");
const takavaloImg = document.getElementById("takavalo-img");

function onOff(event) {
  const toggle = event.target.checked;
  const img = event.target.parentNode.parentNode.lastElementChild; // input => li => img 

  switch (toggle) {
    case true:
      img.setAttribute("src", "images/valot/on.png");
      break;

    case false:
      img.setAttribute("src", "images/valot/off.png");
        break;
  }
}

/*********************VELOTEHTAVA LOPETUS*************************/

// HISSITEHTAVA 13.10.2020

const kerrosValinta = document.getElementsByClassName("kerros");
const valitseKerros = document.getElementById("valitse-kerros-btn");
const kerrosPara = document.getElementById("tama-kerros");

let kerrosNro = parseInt(document.getElementById("kerros-nro").innerText);
let paateKerros;

// Eventit
valitseKerros.addEventListener("click", mene);

// Funktiot
function mene(event) {
  event.preventDefault();
  paateKerros = parseInt(document.querySelector("input[name='kerros']:checked").value);
  
    setInterval(() => {
      if (kerrosNro < paateKerros) {
        kerrosNro++;
        kerrosPara.innerText = `Olet kerroksessa: ${kerrosNro}`;
      } else if (kerrosNro > paateKerros) {
        kerrosNro--;
        kerrosPara.innerText = `Olet kerroksessa: ${kerrosNro}`;
      }
    }, 1500);
}