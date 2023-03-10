"use strict";

const colorBtn = document.getElementsByClassName("color-btn");
const colorBtn1 = document.querySelector(".color-btn1");
const colorBtn2 = document.querySelector(".color-btn2");
const colorBtn3 = document.querySelector(".color-btn3");
const colorBtn4 = document.querySelector(".color-btn4");
const colorBtn5 = document.querySelector(".color-btn5");
const colorBtn6 = document.querySelector(".color-btn6");
const newGame = document.querySelector(".new-game");
const pickWin = document.querySelector(".pick");
const color = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "orange",
  "lime",
  "brown",
  "purple",
  "white",
  "grey",
  "skyblue",
  "lavender",
  "wheat",
  "choclate",
  "coral",
  "darkturquoise",
  "khaki",
  "mediumvioletred",
];

const newColor = () => {
  const colorIndex = parseInt(Math.random() * color.length);
  colorBtn1.style.backgroundColor = color[colorIndex];
};
newColor();

const newColor2 = () => {
  const colorIndex = parseInt(Math.random() * color.length);
  colorBtn2.style.backgroundColor = color[colorIndex];
};
newColor2();

const newColor3 = () => {
  const colorIndex = parseInt(Math.random() * color.length);
  colorBtn3.style.backgroundColor = color[colorIndex];
};
newColor3();

const newColor4 = () => {
  const colorIndex = parseInt(Math.random() * color.length);
  colorBtn4.style.backgroundColor = color[colorIndex];
};
newColor4();

const newColor5 = () => {
  const colorIndex = parseInt(Math.random() * color.length);
  colorBtn5.style.backgroundColor = color[colorIndex];
};
newColor5();

const newColor6 = () => {
  const colorIndex = parseInt(Math.random() * color.length);
  colorBtn6.style.backgroundColor = color[colorIndex];
};
newColor6();

newGame.addEventListener("click", function () {
  newColor();
  newColor2();
  newColor3();
  newColor4();
  newColor5();
  newColor6();
  location.reload();
});

const winner = [
  colorBtn1,
  colorBtn2,
  colorBtn3,
  colorBtn4,
  colorBtn5,
  colorBtn6,
];
const random = winner[Math.floor(Math.random() * winner.length)];

random.addEventListener("click", function () {
  pickWin.textContent = "You Win!";
});

for (let i = 0; i < colorBtn.length; i++) {
  colorBtn[i].addEventListener("click", function () {
    if (colorBtn[i] != random) {
      colorBtn[i].style.backgroundColor = "rgb(" + 2 + "," + 2 + "," + 43 + ")";
    } else {
      winner.forEach((el) => {
        el.style.backgroundColor = random.style.backgroundColor;
      });
    }
  });
}
