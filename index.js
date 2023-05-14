import { recipesData } from "./data/data.js";

function getRecipe() {
  const recipesList = recipesData.recipes.map((recipeList) => {
    return recipeList;
  });

  const randomRecipe = Math.floor(Math.random() * recipesList.length);
  const recipe = recipesList[randomRecipe];

  const ulIngredients = document.getElementById("recipe-ingredients");

  document.getElementById("btn").innerHTML = "Une autre !";

  if (recipe.flag == "random") {
    document.getElementById(
      "recipe-picture"
    ).src = `./img/dishes/${recipe.pic}`;
    document.getElementById("recipe-title").innerHTML = recipe.name;
    document.getElementById("recipe-time").innerHTML = "";
    document.getElementById("recipe-servings").innerHTML = "";
    document.getElementById("cta-link").classList.add("hidden");

    while (ulIngredients.hasChildNodes()) {
      ulIngredients.removeChild(ulIngredients.firstChild);
    }
  } else {
    document.getElementById(
      "recipe-picture"
    ).src = `./img/dishes/${recipe.pic}`;
    document.getElementById("recipe-title").innerHTML = recipe.name;
    document.getElementById(
      "recipe-time"
    ).innerHTML = `Temps de préparation : ${recipe.time}`;
    document.getElementById(
      "recipe-servings"
    ).innerHTML = `<i class="fa-solid fa-user"></i> ${recipe.serving}`;

    while (ulIngredients.hasChildNodes()) {
      ulIngredients.removeChild(ulIngredients.firstChild);
    }

    recipe.ingredients.forEach((element) => {
      let ingredient = document.createElement("li");

      ingredient.innerHTML = `<div class="ingredients"><img src="./img/ingredients/${element.pic}.png"/><p>${element.name}</p></div>`;
      ulIngredients.appendChild(ingredient);
    });
    console.log(recipe.link);

    if (recipe.link === undefined) {
      document.getElementById("cta-link").classList.add("hidden");
    } else {
      document.getElementById("cta-link").classList.remove("hidden");
      document.getElementById("recipe-link").href = recipe.link;
      document.getElementById("recipe-link").innerHTML = "Voir la recette";
    }

    //   const ulSteps = document.getElementById("recipeSteps");

    //   while (ulSteps.hasChildNodes()) {
    //     ulSteps.removeChild(ulSteps.firstChild);
    //   }

    //   recipe.steps.forEach((element) => {
    //     let step = document.createElement("li");

    //     step.innerHTML = `<div><h3>${element.step}</h3><p>${element.instruction}</p></div>`;
    //     ulSteps.appendChild(step);
    //   });
  }
}

document.getElementById("btn").addEventListener("click", getRecipe);
