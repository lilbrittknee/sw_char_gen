// ***** Random Integer Start *****
// Set Specieis URL to a random number every time it's run.

// const getRandomInteger = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return ([2, 6].includes(num)) ? getRandomInteger(min, max) : num;

//  return Math.floor(Math.random() * (max - min)) + min;

//};

function getRandomInteger(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return ([2, 6].includes(num)) ? getRandomInteger(min, max) : num;
}
const randomInteger = getRandomInteger(1, 37)
console.log(randomInteger)

async function fetchSpecies() {
  const results = await fetch((`https://swapi.info/api/species/${randomInteger}`));

  const getSpecies = await results.json();
  console.log(getSpecies.name);
  console.log(randomInteger);

  const displaySpecies = document.getElementById("displaySpecies");
  displaySpecies.innerHTML = getSpecies.name;
}

fetchSpecies();


//         ***** Random Integer End *****


//         ***** Max Age Start *****
// Find the maximum age based by pulling average_lifespan and making that the max.

// If the average lifespann is not an integer, make the maximum age 100

async function fetchMaxAge() {
  const results = await fetch((`https://swapi.info/api/species/${randomInteger}`));

  const data = await results.json();
  var getMaxAge = data.average_lifespan

  // console.log(getMaxAge);
  // console.log(!isNaN(getMaxAge));

  if (!isNaN(getMaxAge) == false) {
    getMaxAge = 100;
    // console.log(getMaxAge);
  }
  // console.log(getMaxAge);
  // console.log(randomInteger);

  // Set Maximum Age as the maximum random number pulled.
  const getRandomAge = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;

  };

  const randomAge = getRandomAge(18, getMaxAge);
  console.log(randomAge);

  const displayAge = document.getElementById("displayAge");
  displayAge.innerHTML = randomAge;
}


fetchMaxAge();
//         ***** Max Age End *****

// ***** Force Alignment Start *****

// If droid, do not give force alignment. 

// ***** Force Alignment End *****


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
  displayPlanet.innerHTML = getPlanet.name;
}

fetchPlanet();

// ***** Planet End *****