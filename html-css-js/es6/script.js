const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};

const { title : titolo } = book;
console.log(titolo);

const { author : autore } = book;
console.log(autore);




const colors = ["red", "green", "blue", "yellow"];

const [, , terzo] = colors;
console.log(terzo);




const user = {
  username: "metalFabio",
  role: "admin"
};

const { username : nick } = user;
console.log(nick);


const response = {
  status: 200,
  data: {
    user: {
      id: 14,
      name: "Fabietto",
      email: "fabietto@dev.com"
    },
    token: "abc123"
  }
};

function parseResponse(response) {
  const { data : { user : { name, email }, token }} = response;

  console.log(`Utente ${name} (${email}), token: ${token}`);

  return { name, email, token };
}

console.log(parseResponse(response));
