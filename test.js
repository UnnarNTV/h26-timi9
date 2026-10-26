const dyr = ["kottur", "hundur", "hestur", "fiskur"];
console.log(dyr);
dyr.push("geit");
console.log(dyr);

dyr.forEach((animal) => {
  console.log(animal[0]);
});

const animalStrings = dyr.map((animal) => "dyr-" + animal);
console.log(animalStrings);

const animalRegistry = dyr.map((animal, i) => animal + "-" + i);
console.log(animalRegistry);

const animalUppercase = dyr.map((animal) => animal.toUpperCase());
console.log(animalUppercase);

//
