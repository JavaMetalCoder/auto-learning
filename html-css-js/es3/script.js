const btn = document.getElementById("btn");
const text = document.getElementById("text");

let i = 0; //indice di click


/* applico event su button */
btn.addEventListener("click", function() {
  i++;
  if (i === 1) {
    text.innerText = "Hai cliccato 1 volta!";
  } else {
  text.innerText = `Hai cliccato ${i} volte`;
  }
});