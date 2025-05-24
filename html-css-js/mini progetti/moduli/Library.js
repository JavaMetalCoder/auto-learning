import Membro from "./Membro.js";

export default class Library {
  #catalogo;
  #membriIscritti

  constructor() {
    this.#catalogo = [];
    this.#membriIscritti = [];


  }

  get catalogo() {
    return this.#catalogo;
  }

  set catalogo(value) {
    this.#catalogo = value;
  }

  get membriIscritti() {
    return this.#membriIscritti;
  }

  set membriIscritti(value) {
    this.#membriIscritti = value;
  }



  addBook(libro) {
    if (this.#catalogo.some(b => b.isbn === libro.isbn)) {
      throw new Error(`IL LIBRO CON ISBN ${libro.isbn} è gia presente!!`);
    }

    this.#catalogo.push(libro);

    

  }
  removeBook(libro) {
    const indx = this.#catalogo.findIndex(r => r.isbn === libro.isbn);
    if (indx === -1) {
      throw new Error(`Il libro non è presente: ISBN: ${libro.isbn}`)
    }

    this.#catalogo.splice(indx, 1);
  }

  addMember(member) {
    if (this.#membriIscritti.some(m => m.id === member.id)) {
      throw new Error(`L'utente con l'ID: ${member.id} è gia presente!`)
    }  //se l'id del nuovo membro esiste ----> errore

    this.#membriIscritti.push(member);
    console.log("Added User");
  }

  deleteMember(member) {
    const indx = this.#membriIscritti.findIndex(md => md.id === member.id);

    if (indx === -1)
      throw new Error(`Utente: ${member.id} non trovato`);

    this.#membriIscritti.splice(indx, 1);

  }


}

