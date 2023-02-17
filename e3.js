const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const button = document.querySelector("button");

function changeBackground() {
  const colorsCopy = colors.slice();
  const rand1 = Math.floor(Math.random() * colorsCopy.length);
  const color1 = colorsCopy.splice(rand1, 1);
  const rand2 = Math.floor(Math.random() * colorsCopy.length);
  const color2 = colorsCopy.splice(rand2, 1);

  console.log(colorsCopy.length + " " + colors.length);
  console.log(color1[0]);
  console.log(color2[0]);

  document.body.style.background =
    "linear-gradient(to right, " + color1[0] + ", " + color2[0] + ")";
}

function changeBackground2() {
  let trueOrFalse = true;
  let rand1;
  let rand2;
  while (trueOrFalse) {
    rand1 = Math.floor(Math.random() * colors.length);
    rand2 = Math.floor(Math.random() * colors.length);
    if (rand1 != rand2) {
      trueOrFalse = false;
    }
  }
  const color1 = colors[rand1];
  const color2 = colors[rand2];
  document.body.style.background =
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";
}

button.addEventListener("click", changeBackground);

function while연습() {
  let value1 = 0;
  let value2 = 10;
  while (value1 < value2) {
    console.log(value1);
    value1 = value1 + 1;
  }
  console.log("끝");
}