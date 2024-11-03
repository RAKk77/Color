let temp = document.querySelector(".temp-col");
let black = document.querySelector(".black");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let puple = document.querySelector(".puple");
let pink = document.querySelector(".pink");
let red = document.querySelector(".red");

black.addEventListener("click", () => {
  temp.style.background = "black";
});

blue.addEventListener("click", () => {
  temp.style.background = "blue";
});
green.addEventListener("click", () => {
  temp.style.background = "green";
});
puple.addEventListener("click", () => {
  temp.style.background = "purple";
});
pink.addEventListener("click", () => {
  temp.style.background = "pink";
});
red.addEventListener("click", () => {
  temp.style.background = "red";
});
