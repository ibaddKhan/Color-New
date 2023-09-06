let bg = document.querySelector("body");
let div = document.querySelector("div");
let Cname = document.querySelector(".name");
let color = [
  "Yellow",
  "Blue",
  "Green",
  "Red",
  "Pink",
  "Lime",
  "Chocolate",
  "Violet",
  "Aqua",
];
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
  div.innerHTML += `<button style="background-color: ${color[i]};" onclick="colors(${i});" >${color[i]}</button>`;
}
function colors(i) {
  // bg.style.backgroundColor = `${color[i]}`;
  Cname.innerHTML += `<p style="font-size: 30px;color:${color[i]}; position:relative;  line-height: 0%;
  ">${color[i]} <span style="color:white;"> ,</span></p> `;
}
