// ***** Random Integer Start *****
function getRandomInteger(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return ([6].includes(num)) ? getRandomInteger(min, max) : num;
}
const randomInteger = getRandomInteger(1, 37)
console.log("random int:")
console.log(randomInteger)

async function fetchSpecies() {
  const results = await fetch((`https://swapi.info/api/species/${randomInteger}`));

  const getSpecies = await results.json();
  var getMaxAge = getSpecies.average_lifespan

  console.log(getSpecies.name);
  // console.log(randomInteger);

  if (!isNaN(getMaxAge) == false) {
    getMaxAge = 100;
    // console.log(getMaxAge);
  }

  const displaySpecies = document.getElementById("displaySpecies");
  displaySpecies.innerHTML = getSpecies.name;

  const getRandomAge = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;

  };

  const randomAge = getRandomAge(18, getMaxAge);
  console.log("Age:")
  console.log(randomAge);

  const displayAge = document.getElementById("displayAge");
  displayAge.innerHTML = randomAge;

}

const getRandomForce = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min

};
var randomForceInteger = getRandomForce(0, 2);
if (randomInteger == 2) {
  randomForceInteger = 3;
};
// console.log("random force");
// console.log(randomForceInteger);

const forceSide = ["who has committed their life to the Light side of the force.", "who has strayed towards the dark side of the force.", "who doesn't believe in the power of the force."]
// console.log("force alignment:")
var forceAlignment = forceSide[randomForceInteger]
console.log("Force Alignment:")
console.log(forceSide[randomForceInteger])
console.log("force int:")
console.log(randomForceInteger)

const displayForce = document.getElementById("displayForce");
displayForce.innerHTML = forceAlignment;

fetchSpecies();
// ***** Random Integer End *****


// // ***** Force Alignment Start *****

// const getRandomForce = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min + 1)) + min

// };
// var randomForceInteger = getRandomForce(0, 2);
// if (randomInteger == 2) {
//   randomForceInteger = 3;
// };
// // console.log("random force");
// // console.log(randomForceInteger);

// const forceSide = ["who has committed their life to the Light side of the force.", "who has strayed towards the dark side of the force.", "who doesn't believe in the power of the force.", "who neither wields nor cares for the force."]
// // console.log("force alignment:")

// var forceAlignment = forceSide[randomForceInteger]
// console.log(forceSide[randomForceInteger])

// const displayForce = document.getElementById("displayForce");
// displayForce.innerHTML = forceAlignment;

// // ***** Force Alignment End *****