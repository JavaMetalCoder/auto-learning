function saluta(nome) {
  return `Ciao ${nome}, benvenuto in Node.js`;
} 

function calcolaEta(annoNascita) {
  return new Date().getFullYear() - annoNascita;
}

module.exports = {
  saluta,
  calcolaEta
};