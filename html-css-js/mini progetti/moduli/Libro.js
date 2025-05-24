export default class Libro {
  #title;
  #author;
  #isbn;
  #isAvailable;


  constructor(title, author, isbn) {
    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
    this.#isAvailable = true;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    this.#author = value;
  }

  get isbn() {
    return this.#isbn;
  }

  set isbn(value) {
    this.#isbn = value;
  }

  get isAvailable() {
    return this.#isAvailable;
  }

  set isAvailable(value) {
    this.#isAvailable = value;
  }
}

