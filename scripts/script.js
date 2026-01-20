// let apiURL = "www.themealdb.com/api/json/v1/1/search.php?s=";

    import { fetchRecipes } from "./api.js";
    import { renderRecipes } from "./DOM.js";

    // grab form and input from html 
    const form = document.getElementById("searchForm")



const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    // bootstrap format since their are utility classes contains content and adds a margin to the top 
    // creates a clean format without using css 
    resultsDiv.className = "container mt-4";
    document.body.appendChild(resultsDiv);

