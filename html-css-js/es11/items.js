const items = [
  { id: 1, name: 'Item1' },
  { id: 2, name: 'Item2' },
  { id: 3, name: 'Item3' },

  // aggiungi almeno un altro oggetto a scelta
];
//oggetto ---> JSON
const JJSON = JSON.stringify(items);
console.log(JJSON);

//JSON ---> oggetto
const stringObj = JSON.parse(JJSON);
console.log(stringObj);

const ul = document.createElement("ul");
document.body.appendChild(ul);

for (const item of stringObj) {
  const li = document.createElement("li");
  li.innerText = item.name;
  li.addEventListener("click", () => {
    alert(`${item.id}`);
  });
  ul.appendChild(li);
}



