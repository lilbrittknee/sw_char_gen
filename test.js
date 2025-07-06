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

  console.log("Species:");
  console.log(getSpecies.name);

  if (!isNaN(getMaxAge) == false) {
    getMaxAge = 100;
    // console.log(getMaxAge);
  }

  const displaySpecies = document.getElementById("displaySpecies");
  displaySpecies.innerHTML = getSpecies.name;

  // ***** Random Integer End *****


  // ----------------------------------------------


  //         ***** Max Age Start *****

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

// ****** Testing *******

//         ***** Max Age End *****


// ----------------------------------------------


// ***** Force Alignment Start *****

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

const displayForce = document.getElementById("displayForce");
displayForce.innerHTML = forceAlignment;

// ----------------------------------------------

// ****** Testing *******
console.log("Force Alignment:")
console.log(forceSide[randomForceInteger])
console.log("force int:")
console.log(randomForceInteger)

fetchSpecies();


// ***** Force Alignment End *****


// ----------------------------------------------


// ***** Planet Start *****

const getPlanetInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;

};

const planetInteger = getPlanetInteger(1, 60);

// console.log("Planet Int:")
// console.log(planetInteger);

async function fetchPlanet() {
  const results = await fetch((`https://swapi.info/api/planets/${planetInteger}`));

  const getPlanet = await results.json();
  // console.log("Planet Name:")
  // console.log(getPlanet.name);

  // console.log("Planet Int:")
  // console.log(planetInteger);

  const displayPlanet = document.getElementById("displayPlanet");
  const planetsTest = displayPlanet.innerHTML = getPlanet.name;

}

fetchPlanet();



// ***** Planet End *****


