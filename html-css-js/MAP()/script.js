const persone = [
  { nome: "Fabio", eta: 25 },
  { nome: "Martina", eta: 23 }
];

const newarray = persone.map(persona => `${persona.nome} ha ${persona.eta} anni`);

console.log(newarray);

//

const prezzi = [10, 20, 30];

// Output: ["10€", "20€", "30€"]
const a = prezzi.map(prezzo => {
  return "" + prezzo.toString() + "$";
});

console.log(a);

//

const parole = ["ciao", "mondo", "fabio"];

// Output: ["CIAO", "MONDO", "FABIO"]

const b = parole.map(parola => {
  return parola.toUpperCase();
});

console.log(b);

//

const logs = [
  { user: "Fabio", action: "login" },
  { user: "Martina", action: "logout" }
];

// Output: ["Fabio ha fatto login", "Martina ha fatto logout"]

const c = logs.map( user => {
  return `${user.user} ha fatto ${user.action}`;
} );

console.log(c);

//

const animali = ["gatto", "cane", "criceto"];

// Output: ["#1: gatto", "#2: cane", "#3: criceto"]

const d = animali.map( (animale, index) => {
  return `#${index + 1}: ${animale}`;
});

console.log(d);

//

const voti = [18, 25, 30, 10, 16];

// Output: ["Sufficiente", "Buono", "Ottimo", "Bocciato", "Bocciato"]

const e = voti.map(voto => {
  if(typeof voto !== "number") {
    return;
  } 

  switch (true) {
    case voto < 18:
      return "Bocciato";
      
    case voto < 24:
      return "Sufficiente";
      
    case voto < 30:
      return "Buono";
    
    case voto === 30:
      return "Ottimo";
  }

});

console.log(e);

//

const timestamps = [1672531200000, 1675123200000];

// Output: ["1/1/2023", "31/1/2023"]

const date = timestamps.map( data => {
  return new Date(data).toLocaleDateString("it-IT");
})

console.log(date);

//

const prodotti = [
  { nome: "Monster", prezzo: 1.99 },
  { nome: "Panino", prezzo: 3.5 },
  { nome: "Sigarette", prezzo: 6.0 }
];

const z = prodotti.map( prod => {
  return `Il prodotto ${prod.nome} costa ${prod.prezzo}$`;
});

console.log(z);