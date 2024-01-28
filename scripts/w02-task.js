/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
    let fullName = "Kerryann Deebes";

//Declare and instantiate a variable to hold the current year.
    let currentYear = new Date().getFullYear();

//Declare and instantiate a variable to hold the file path
// Identify the variable as "profilePicture".
    let profilePicture = "images/profilePicutre.jpg"



/* Step 3 - Element Variables */

    const nameElement = document.getElementById("name");
    const foodElement = document.getElementById("food");
    const yearElement = document.querySelector("#year");

//Use any viable method to get the profile image element stored into a variable named "imageElement".
    const imageElement = document.querySelector("main picture img");

/* Step 4 - Adding Content */
//Assign the nameElement's innerHTML property the fullName variable value.
//Surround the fullName value with <strong> tags using a template literal.
    nameElement.innerHTML = `<strong>${fullName}</strong>`;

//Use the textContent property to set the value of the element to the value of the variable currentYear.
    yearElement.textContent = currentYear;

//Use the setAttribute method to set the src property of the image element.
    imageElement.setAttribute("src", profilePicture);

    //Use the setAttribute method to set the alt property of the image element.
    imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

//Declare an array variable to hold your favorite foods.
    let favoriteFoods = ["Red Peas Cookup with Beef", "Baked Macaroni & Cheese", "Vegetable Rice with Baked Chicken"];

//Modify the HTML element with the id of food to display your favorite foods array.
    foodElement.textContent = favoriteFoods.join(", ");

//Declare and instantiate a variable to hold another single favorite food item.
    let additionalFood = "otherFoods";

//Add the value stored in this new variable to your favorite food array.
    favoriteFoods.push(otherFoods);

//Append the new array values onto the displayed content of the HTML element with the id of food.
//Use a += operator and a <br> (line break character).

    foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");

//Remove the first element in the favorite food array.
    favoriteFoods.shift();

//Again, append the array output showing the modified array, using a line break.
    foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");

//Remove the last element in the favorite food array.
    favoriteFoods.pop();

//Append the array output with this final modified favorite foods array.
    foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");
