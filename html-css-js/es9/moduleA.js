export default function createParagraph(text) {
  const p = document.createElement("p");
  p.innerText = text;
  p.style.color = "blue";
  return p;

}