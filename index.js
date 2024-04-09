const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

const color1 = document.querySelector(".color-square1");
const color2 = document.querySelector(".color-square2");
const color3 = document.querySelector(".color-square3");

const rangeInput = document.querySelector("#rangeInput");
const labelRangeInput = document.querySelector("#labelRange");
console.log(rangeInput.value);
// color de base
let color = "black";
// size de base
let size = 1;

rangeInput.addEventListener("input", () => {
  console.log(rangeInput.value);
  //   actualise en temps reel le range
  labelRangeInput.innerHTML = rangeInput.value;
  //   return la nouvelle valeur de range
  return (size = rangeInput.value);
});

const reset = document.getElementById("reset");
console.log(reset);

function getMousePosition(e) {
  // obtenir la position de la souris

  //   permets d'obtenir les dimention du rectancle
  const rect = canvas.getBoundingClientRect();
  // c'est la marge qu'on a a cause du marging donc on l'enleve
  //   -rect.left
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

color1.addEventListener("click", (e) => {
  console.log(e);
  return (color = "blue");
});

color2.addEventListener("click", (e) => {
  console.log(e);
  return (color = "green");
});
color3.addEventListener("click", (e) => {
  console.log(e);
  return (color = "red");
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function mouseMove(e) {
  const mousePos = getMousePosition(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();

  ctx.strokeStyle = color;
  ctx.lineWidth = size;
}

canvas.addEventListener("mousedown", (e) => {
  // pour éviter les drg and drop
  e.preventDefault();
  const mousePos = getMousePosition(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);

  canvas.addEventListener("mousemove", mouseMove);
  //   pour arréter l'execution de notre fonction mouseMove lorsqu'on relache la souris
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});
