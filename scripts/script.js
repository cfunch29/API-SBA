// let apiURL = "www.themealdb.com/api/json/v1/1/search.php?s=";

import { fetchRecipes } from "./api.js";
import { renderRecipes } from "./DOM.js";

// grab form and input from html 
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

// dynamic results container 
const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
// bootstrap format since their are utility classes contains content and adds a margin to the top 
// creates a clean format without using css 
resultsDiv.className = "container mt-4";
document.body.appendChild(resultsDiv);


// Handle form submit to return user interaction - meal input - prevent form from reloading entire page once submit is clicked 
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchMeal = input.value.trim();

    // input validation 
    if(!searchMeal) {
        resultsDiv.textContent = "Please enter meal name!!!!";
        return; 
    }

    const meals = await fetchRecipes(searchMeal);
    renderRecipes(meals);
});

console.log(fetchRecipes);
console.log(renderRecipes);
console.log(getIngredients); 