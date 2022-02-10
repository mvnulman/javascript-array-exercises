const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// ## MAP

// 1. Get an array of all names
const mapAllNames = characters.map((character) => {
  return character.name;
});

// console.log(mapAllNames);

// 2. Get an array of all heights
const mapAllHeights = characters.map((character) => {
  return character.height;
});
// console.log(mapAllHeights);

// 3. Get an array of objects with just name and height properties
const mapNameAndHeight = characters.map((character) => {
  return {
    name: character.name,
    height: character.height,
  };
});
// console.log(mapNameAndHeight);

// 4. Get an array of all first names
const mapFirstNames = characters.map((character) => {
  return character.name.split(" ")[0];
});
// console.log(mapFirstNames);

// ## REDUCE

// 1. Get the total mass of all characters
// 2. Get the total height of all characters
// 3. Get the total number of characters in all the character names
// 4. Get the total number of characters by eye color (hint. a map of eye color to count)

// ## FILTER

// 1. Get characters with mass greater than 100
const massGreaterThan100 = characters.filter((character) => {
  return character.mass > 100;
});

// console.log(massGreaterThan100);

// 2. Get characters with height less than 200
const heightLessThan200 = characters.filter((character) => {
  return character.height < 200
});
// console.log(heightLessThan200);

// 3. Get all male characters
const allMaleCharacters = characters.filter((character) => {
  return character.gender === 'male'
});
// console.log(allMaleCharacters)
// 4. Get all female characters
const allFermaleCharacters = characters.filter((character) => {
  return character.gender === 'female'
});
// console.log(allFermaleCharacters);


// ## SORT
// 1. Sort by name
const byName = characters.sort((a, b) => {
  if(b.name < a.name) return 1;
  return -1
})
// console.log( byName )

// 2. Sort by mass
const byMass = characters.sort((a, b) => {
  if(b.mass < a.mass) return 1;
  return -1
})
// console.log( byMass )

// 3. Sort by height
const byHeight = characters.sort((a, b) => {
  if(b.height < a.height) return 1;
  return -1
})
// console.log( byHeight )

// 4. Sort by gender
const byGender = characters.sort((a, b) => {
})


// ## EVERY

// 1. Does every character have blue eyes?
const doesHaveBlueEyes = characters.every(character => {
  return character.eye_color === "blue"
})
console.log(doesHaveBlueEyes)

// 2. Does every character have mass more than 40?
const doesHaveMoreThan40 = characters.every(character => {
  return character.mass > 40
});
console.log(doesHaveMoreThan40)

// 3. Is every character shorter than 200?
const doesHaveShorterThan200 = characters.every (character => {
  return character.every < 200
});
console.log(doesHaveShorterThan200)

// 4. Is every character male?
const isEveryCharacterMale = characters.every(character => {
  return character.every === "male"
});
console.log(isEveryCharacterMale)

// ## SOME

// 1. Is there at least one male character?
// 2. Is there at least one character with blue eyes?
// 3. Is there at least one character taller than 200?
// 4. Is there at least one character that has mass less than 50?
