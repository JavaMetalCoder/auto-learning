export default class Persona {
  #name
  #age
  #sex

  constructor(name, age, sex) {
    this.#name = name;
    this.#age = age;
    this.#sex = sex;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    this.#age = value;
  }

  get sex() {
    return this.#sex;
  }

  set sex(value) {
    this.#sex = value;
  }
}

