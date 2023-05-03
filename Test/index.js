import { recipesData } from "./data/data.js";

const recipesList = recipesData.recipes.map((recipe) => {
  return recipe;
});

function getRandomRecipe(arr) {
  const randomRecipe = Math.floor(Math.random() * arr.length);
  const recipe = arr[randomRecipe];
  return recipe;
}

function getRecipe() {
  document.getElementById("btn").innerHTML = "Une autre !";
  document.getElementById("recipeTitle").innerHTML =
    getRandomRecipe(recipesList).name;
  document.getElementById("recipePicture").src = `./img/${
    getRandomRecipe(recipesList).url
  }`;
}

document.getElementById("btn").addEventListener("click", getRecipe);
