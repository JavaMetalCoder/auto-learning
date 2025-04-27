const btn = document.getElementById("btn");
const text = document.getElementById("text-change");

const colors = ["red", "blue", "purple", "orange"];
let lastColor = ""; //var per contenere il colore precedente

btn.addEventListener("click", function() {
  let newColor = "";
  do {
    let randomIndex = Math.floor(Math.random() * colors.length);
    newColor = colors[randomIndex];

  } while (newColor === lastColor);

  text.style.color = newColor;
  lastColor = newColor;
  
  
});