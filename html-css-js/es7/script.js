const robot = {
  model: "RX-78",
  battery: "85%",
  online: true
};

for (const key in robot) {
  
    console.log(`${key}: ${robot[key]}`);
    
  
}


const settings = {
  volume: 5,
  brightness: 7,
  contrast: 8
};

for (const [key, value] of Object.entries(settings)) {
  console.log(`${key} → ${value}`);
  
}


printObject({
  name: "fabio",
  age: 26,
  verified: false
});

function printObject(obj) {
  for (const key in obj) {
    switch (typeof obj[key]) {
      case "string":
        console.log(`${key}: ${obj[key].toUpperCase()}`);
        break;
      case "number":
        console.log(`${key}: ${obj[key] * 2}`);
        break;
      case "boolean":
        console.log(`${key}: ${!obj[key]}`);
        break;
      default:
        console.log(`${key}: ${obj[key]}`);
    }
  }
}
