
export async function fetchRecipes(searchMeal) {
    let apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;

    try {
        // try searching by meal name 
        let response = await fetch(apiURL, {
            method: "GET"
        });

        if (response.status < 200 || response.status >= 300) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }
        // if meals are found by name, return meal
        let data = await response.json();

        if (data.meals) {
            return data.meals;
        }

    }

    catch (err) {
        console.error("Error fetching recipes", err);
        return [];
    }
};




