//Name: Kerryann Deebes
//Class: CSE 121B
//Date: 2/22/2024

class RecipeFinder {
    constructor(apiKey, apiUrl) {
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }

    async fetchRecipes(userInput) {
        try {
            const response = await fetch(`${this.apiUrl}?apiKey=${this.apiKey}&ingredients=${userInput}`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching recipes:', error);
            return [];
        }
    }
}

class RecipeRenderer {
    constructor(recipesDiv) {
        this.recipesDiv = recipesDiv;
    }

    displayRecipes(recipes) {
        this.recipesDiv.innerHTML = '';
        if (recipes.length === 0) {
            this.recipesDiv.innerHTML = 'No recipes found';
            return;
        }

        const recipeList = document.createElement('ul');
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('li');
            recipeItem.innerHTML = `
                <h3>${recipe.title}</h3>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p>Ingredients: ${recipe.missedIngredientCount}</p>
                <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
            `;
            recipeList.appendChild(recipeItem);
        });
        this.recipesDiv.appendChild(recipeList);
    }
}

// Usage
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipesDiv = document.getElementById('recipes');

const apiKey = '77ad53dc446d428dbae5056412439618';
const apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients';

const recipeFinder = new RecipeFinder(apiKey, apiUrl);
const recipeRenderer = new RecipeRenderer(recipesDiv);

searchBtn.addEventListener('click', async () => {
    const userInput = searchInput.value.trim();
    if (userInput === '') {
        alert('Please enter ingredients or dish name');
        return;
    }

    const recipes = await recipeFinder.fetchRecipes(userInput);
    recipeRenderer.displayRecipes(recipes);
});
