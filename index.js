// ***** Random Integer Start *****

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

  console.log("Species first letter:")
  console.log(getSpecies.name[0])

  if ((getSpecies.name[0]) == ("A")) {
    console.log("true");
    var sentence = (`You are an ${getSpecies.name}`);
  }
  else if ((getSpecies.name[0]) == ("E")) {
    console.log("true");
    var sentence = (`You are an ${getSpecies.name}`);
  }
  else if ((getSpecies.name[0]) == ("I")) {
    console.log("true");
    var sentence = (`You are an ${getSpecies.name}`);
  }
  else if ((getSpecies.name[0]) == ("O")) {
    console.log("true");
    var sentence = (`You are an ${getSpecies.name}`);
  }
  else if ((getSpecies.name[0]) == ("U")) {
    console.log("true");
    var sentence = (`You are an ${getSpecies.name}`);
  }
  else {
    console.log("false");
    var sentence = (`You are a ${getSpecies.name}`);
  }


  const displaySpecies = document.getElementById("displaySpecies");
  displaySpecies.innerHTML = sentence;

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

const getRandomForce = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min

};
var randomForceInteger = getRandomForce(0, 3);
if (randomInteger == 2) {
  randomForceInteger = 2;
};
// console.log("random force");
// console.log(randomForceInteger);

const forceSide = ["who has committed their life to the Light Side of the force.", "who has fallen to the Dark Side of the force.", "who doesn't believe in the power of the force.", "who uses the Light Side of the force but you've...dabbled in the Dark Side."]
// console.log("force alignment:")
var forceAlignment = forceSide[randomForceInteger]
console.log(forceSide[randomForceInteger])

const displayForce = document.getElementById("displayForce");
displayForce.innerHTML = forceAlignment;

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


// ***** Occupation Start ****** 

const getRandomJob = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;

};
var totalOccupations =
  ["adjunct", "analyst", "armorer", "chief steward", "collector", "contract broker", "courier", "crate-buster", "crimson duty", "cutter", "deep hunter", "dishwasher", "diver", "docking controller", "droid builder", "droid-monger", "drop point agent", "duct rat", "dusk weaver", "fashion designer", "ferryman", "flatstender", "flight controller", "flight instructor", "folklorist", "force hunter", "fortune teller", "gatherer", "gorgmonger", "gunslinger", "gutter", "herbalist", "hermit", "hunt saboteur", "hypersurveyor", "imperial hunter", "information broker", "jedi hunter", "jockey", "linguist", "logger", "martial artist", "mind-slicer", "monster hunter", "mythologist", "navulator", "net-maker", "philosopher", "plumber", "porter", "portmaster", "private investigator", "prospector", "puppeteer", "quad racer", "quarantine inspector", "quartz philosopher", "racer", "rainman", "roustabout", "sabersmith", "scantech", "secretary", "security revenue agent", "shipspotter", "signals analyst", "steerage overseer", "strategist", "systems analyst", "systems coordinator", "tactician", "tax collector", "taxidermist", "thermocapsulary dehousing assister", "tibanna gas panner", "top tracker", "tourist director", "traffic controller", "trapper", "travel agent", "treasure hunting", "tunroth hunter", "water monger", "weapons master", "weaver", "windfisher"]

const randomJob = getRandomJob(0, 85);
console.log(randomJob);

const displayAge = document.getElementById("displayOccpation");
displayAge.innerHTML = totalOccupations[randomJob];

// ***** Occupation End *****