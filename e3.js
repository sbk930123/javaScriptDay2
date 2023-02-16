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

let colorsCopy = [...colors];

const button = document.querySelector("button");

function changeBackground() {
  const colorIndex = Math.floor(Math.random() * colorsCopy.length);
  const color1 = colorsCopy[colorIndex];
  // splice로 colorIndex로 Copy에 담아놓은 값에서 1개 짜름 (맞나?)
  colorsCopy.splice(colorIndex, 1);

  // 하나씩 값이 빠지는지 확인
  console.log(colorsCopy.length, colors.length, colors); // 정상적으로 빠지는 것이 확인 되었다.


  const color2 = colorsCopy[Math.floor(Math.random() * colorsCopy.length)];
  // 재선언으로 값을 새로 다시 채움 
  colorsCopy = [...colors];
  document.body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";

  // 어떤 값이 뽑아져 나왔는지 확인 ( 또는 겹친 값이 있는지 )
  console.log(color1);
  console.log(color2);
}

button.addEventListener("click", changeBackground);
