// helper function to loop through for ingredients 
function getIngredients(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }
    return ingredients;
}

export function renderRecipes(meals) {
    const resultsDiv = document.getElementById("results");
    // clear results section before showing new results
    resultsDiv.innerHTML = "";
    if (!meals || meals.length === 0) {
        resultsDiv.textContent = "No recipes found.";
        return;
    }

    meals.forEach(meal => {
        // create div for meal results 
        const card = document.createElement("div");
        // bootstrap syntax card margin bottom 3
        card.className = "card mb-3";
        card.style.maxWidth = "540px";

        //bootstrap styling of card format for meal results with img and directions with ingredients
        card.innerHTML =
            `<div class = "row g-0">
        <div class = "col-md-4">
        <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="${meal.strMeal}">
        </div>
        <div class ="col-md-8">
        <div class ="card-body">
        <h5 class ="card-title">${meal.strMeal}</h5>
        <p class ="card-text">
        <strong>Category:</strong> ${meal.strCategory}<br>
        <strong>Area:</strong> ${meal.strArea}
        </p>
            <h6>Ingredients</h6>
            <ul>
            ${getIngredients(meal)
                .map(item => `<li>${item}</li>`)
                .join("")
            }
            </ul>
            
        <h6>Instructions</h6>
        <p class ="card-text">
        ${meal.strInstructions}
        </p>
        </div>
        </div>
        </div>`;

        resultsDiv.appendChild(card);
    });

}