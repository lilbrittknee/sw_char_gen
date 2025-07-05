// fetch("https://swapi.info/api/species/")
//   .then(response => {

//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// It's Ctrl + K + C to comment and Ctrl + K + U to uncomment.
// let request = "https://swapi.info/api/species/"

// fetch(request).then((response) => {
//   return response.json();
// }).then((data) => {
//   let p = document.getElementById("text");
//   console.log(data);
//   p.innerHTML = JSON.stringify(data);
// });

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;

};

const randomInteger = getRandomInteger(1, 37);

// console.log(randomInteger);

async function fetchSpecies() {
  const results = await fetch((`https://swapi.info/api/species/${randomInteger}`));

  const getSpecies = await results.json();
  console.log(getSpecies.name);
  console.log(randomInteger);

  const displaySpecies = document.getElementById("displaySpecies");
  displaySpecies.innerHTML = getSpecies.name;
}

fetchSpecies();


//Find the maximum age based by pulling average_lifespan and making that the max

async function fetchMaxAge() {
  const results = await fetch((`https://swapi.info/api/species/${randomInteger}`));

  const data = await results.json();
  const getMaxAge = data.average_lifespan

  if (Number.getMaxAge == false) {
    getMaxAge = 100;
    console.log(getMaxAge);
  }
  else {
    console.log(getMaxAge);
  }

  // console.log(randomInteger);
}

fetchMaxAge();

//Put getMaxAge into the max, sp the random age does not exceed average lifespan

// const randomAge = getRandomAge(1, 37);

// console.log(randomAge);

// const getRandomAge = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min)) + min;

// };

//Will be used to display the random age

// async function fetchSpecies() {
//   const results = await fetch((`https://swapi.info/api/species/${randomAge}`));

//   const getSpecies = await results.json();
//   console.log(getSpecies.name);

//   const displaySpecies = document.getElementById("displaySpecies");
//   displaySpecies.innerHTML = getSpecies.name;
// }

// fetchSpecies();