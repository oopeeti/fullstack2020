const testPara1 = document.getElementById("testPara-1");
const testPara2 = document.getElementById("testPara-2");
const testPara3 = document.getElementById("testPara-3");
const testPara4 = document.getElementById("testPara-4");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

const dateElement = document.getElementById("date");
const date = new Date();
dateElement.innerHTML = date;

btn1.addEventListener("click", () => {
  testPara1.innerHTML = "Olli-Pekka Nikka";
})
btn2.addEventListener("click", () => {
  testPara2.innerHTML = "Kotkantie 2, Oulu";
})
btn3.addEventListener("click", () => {
  testPara3.innerHTML = "Tänään on: " + date;
})
btn4.addEventListener("click", () => {
  alert("Tänään on: " + date);
})