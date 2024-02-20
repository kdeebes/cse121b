// JavaScript code for Recipe Finder project

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipesDiv = document.getElementById('recipes');

const apiKey = '77ad53dc446d428dbae5056412439618';
const apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients';

searchBtn.addEventListener('click', fetchRecipes);

async function fetchRecipes() {
    const userInput = searchInput.value.trim();
    if (userInput === '') {
        alert('Please enter ingredients or dish name');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}?apiKey=${apiKey}&ingredients=${userInput}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        displayRecipes(data);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    recipesDiv.innerHTML = '';
    if (recipes.length === 0) {
        recipesDiv.innerHTML = 'No recipes found';
        return;
    }

    const recipeList = document.createElement('ul');
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('li');
        recipeItem.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>Missing ingredients: ${recipe.missedIngredientCount}</p>
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;
        recipeList.appendChild(recipeItem);
    });
    recipesDiv.appendChild(recipeList);
}
