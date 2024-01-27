/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Kerryann Deebes';

var currentYear = new Date().getFullYear();
var profilePicture = "images/profilePicture.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

// Get the profile image element by its ID
var imageElement = document.querySelector('home');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let FavFoods = ["Macaroni & Cheese ", " Curry & Roti ", " Red Peas Cookup with Beef ", " Fried Plantains with Eggs & bacon"];

// Step 2: place the values of the favorite foods variable into the HTML file
foodElement.innerHTML = FavFoods.join('<br>');

// Step 3: declare and instantiate a variable to hold another favorite food
let FavFoodOther = " Potato & Ripe Plantain Salad";

// Step 4: add the variable holding another favorite food to the favorite food array
FavFoods.push(FavFoodOther);

// Step 5: Append the new array values onto the displayed content of the HTML element
foodElement.innerHTML += `<br>${FavFoods.join('<br>')}`;

// Step 6: remove the first element in the favorite foods array
FavFoods.shift();

// Step 7: repeat Step 5
foodElement.innerHTML = FavFoods.join('<br>');

// Step 8: remove the last element in the favorite foods array
FavFoods.pop();

// Step 9: repeat Step 2
foodElement.innerHTML = FavFoods.join('<br>');
