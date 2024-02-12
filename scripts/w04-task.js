/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */

// Step 1: Declare an empty object literal
const myProfile = {};

// Step 2: Add properties to the object
myProfile.name = "Kerryann Deebes";
myProfile.photo = "images/pic.jpg";
myProfile.favoriteFoods = ["Pizza", "Macaroni & Cheese", "Chicken Alfredo"];
myProfile.hobbies = ["Coding", "Reading", "Music"];
myProfile.placesLived = []; // Initialize an empty array for places lived

// Step 7: Add an object literal to the placesLived array
myProfile.placesLived.push({
  place: "Bartica, Essequibo River",
  length: "18 years",
});

// Step 8: Add additional object literals for other places lived
myProfile.placesLived.push({
  place: "Georgetown, Guyana",
  length: "10 years",
});

console.log(myProfile); // prints the entire myProfile object

/* DOM Manipulation - Output */

// DOM Manipulation

// Get references to DOM elements
const nameElement = document.getElementById('name');
const photoElement = document.getElementById('photo');
const favoriteFoodsList = document.getElementById('favorite-foods');
const hobbiesList = document.getElementById('hobbies');
const placesLivedList = document.getElementById('places-lived');

// 1. Update name element
nameElement.textContent = myProfile.name;

// 2. Update photo element src and alt attributes
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

// 3. Populate favorite foods list
myProfile.favoriteFoods.forEach(food => {
  const listItem = document.createElement('li');
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});

// 4. Populate hobbies list
myProfile.hobbies.forEach(hobby => {
  const listItem = document.createElement('li');
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});

// 5. Populate places lived list
myProfile.placesLived.forEach(place => {
  const placeItem = document.createElement('dt');
  placeItem.textContent = place.place;
  const lengthItem = document.createElement('dd');
  lengthItem.textContent = place.length;
  placesLivedList.appendChild(placeItem);
  placesLivedList.appendChild(lengthItem);
});