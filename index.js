import { recipesData } from "./data/data.js";

const recipesList = recipesData.recipes.map((recipeList) => {
  return recipeList;
});

function getRecipe() {
  const randomRecipe = Math.floor(Math.random() * recipesList.length);
  const recipe = recipesList[randomRecipe];

  document.getElementById("btn").innerHTML = "Une autre !";
  document.getElementById("recipePicture").src = `./img/dishes/${recipe.url}`;
  document.getElementById("recipeTitle").innerHTML = recipe.name;
  document.getElementById(
    "recipeTime"
  ).innerHTML = `Temps de préparation : ${recipe.time}`;
  document.getElementById(
    "recipeServings"
  ).innerHTML = `<i class="fa-solid fa-user"></i> ${recipe.serving}`;

  const ulIngredients = document.getElementById("recipeIngredients");

  while (ulIngredients.hasChildNodes()) {
    ulIngredients.removeChild(ulIngredients.firstChild);
  }

  recipe.ingredients.forEach((element) => {
    let ingredient = document.createElement("li");

    ingredient.innerHTML = `<div class="ingredients"><img src="./img/ingredients/${element.pic}"/><p>${element.name}</p></div>`;
    ulIngredients.appendChild(ingredient);
  });

  const ulSteps = document.getElementById("recipeSteps");

  while (ulSteps.hasChildNodes()) {
    ulSteps.removeChild(ulSteps.firstChild);
  }

  recipe.steps.forEach((element) => {
    let step = document.createElement("li");

    step.innerHTML = `<div><h3>${element.step}</h3><p>${element.instruction}</p></div>`;
    ulSteps.appendChild(step);
  });
}

document.getElementById("btn").addEventListener("click", getRecipe);
