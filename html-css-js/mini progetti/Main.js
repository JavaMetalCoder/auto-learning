import Library from "./moduli/Library.js";
import Libro from "./moduli/Libro.js";



const lib = new Library();

const a = new Libro("Harry Potter", "Rowling", "1234");
const b = new Libro("Orgoglio e pregiudizio", "Austin", "1233");
const c = new Libro("Boh", "Gino", "1232");

lib.addBook(a);
console.log(lib.catalogo);
lib.addBook(new Libro("A", "B", "1236"));
console.log(lib.catalogo);