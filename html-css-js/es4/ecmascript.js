/* es1 */

function filtraPari(array) {
  let newArray = [];
  if (!Array.isArray(array)) {
    throw new TypeError("Errore: parametro non è un array!");
  } else {
    console.log("Analizzo!");
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("PARI!");
      newArray.push(array[i]);
      
    } else {
      console.log("DISPARI");
       
    }
  }
  return newArray;
}

console.log(filtraPari([1, 4, 6, 7]));

/* es2 */

function contaVocali(string) {
  
  //CHECK-IN
  if(typeof(string) !== "string") {
    throw new TypeError("Errore: string param non è una stringa!");

  }

  //variabili per le vocali
  const vocali = "aeiou";
  let i = 0; 

  for (let char of string.toLowerCase()) {
    if (vocali.includes(char)) {
      i++;

    }

  }
  //ritorna il num di vocali
  return i;

}

console.log(contaVocali("Perdincibacco"));

/* es3 */

class Persona {
  constructor(age, name, isWorking) {
    this.age = age;
    this.name = name;
    this.isWorking = isWorking;
  }

  getAge() {
    return this.age;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getIsWorking() {
    return this.isWorking;
  }

  toggleIsWorking() {
    this.isWorking = !this.isWorking;
  }
}

