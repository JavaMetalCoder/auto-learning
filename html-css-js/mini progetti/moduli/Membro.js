import Persona from "./Person.js";

export default class Membro extends Persona {
  #id
  #libriInPossesso

  constructor(name, age, sex, id) {
    super(name, age, sex);
    this.#id= id;
    this.#libriInPossesso = [];
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get libriInPossesso() {
    return this.#libriInPossesso;
  }

  set libriInPossesso(value) {
    this.#libriInPossesso = value;
  }

  prestitoLibro(libro) {
    if (this.#libriInPossesso.some(lib => lib.isbn === libro.isbn))
      throw new Error(`Libro: ${libro.isbn}, ${libro.title} gia in possesso!`);

    if (!libro.isAvailable)
      throw new Error(`Il libro non è momentaneamente disponibile!`);

    this.#libriInPossesso.push(libro);
    libro.isAvailable = false;

  }

  consegnaLibro(catalogo, libro) {
    if (catalogo.some(lib => lib.isbn === libro.isbn))
      throw new Error(`Libro gia presente nel catalogo: ${libro.isbn}`);

    catalogo.push(libro);



  }

}