const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.search_btn')
const recipeContainer = document.querySelector('.recipe_container')
const recipeCloseBtn = document.querySelector('.recipe_close_btn')
const recipeDetailContent = document.querySelector('.recipe_detail_content')


const fetchRecipe = async function (query) {
  try {


    recipeContainer.innerHTML = "Fetching Recipes..."
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json()
    // console.log(response.meals[0]);`

    recipeContainer.innerHTML = ""


    response.meals.forEach(meal => {
      const recipeDiv = document.createElement('div')
      recipeDiv.classList.add('recipe')
      recipeDiv.innerHTML = `
  <img src = "${meal.strMealThumb}">
  <h3>${meal.strMeal}</h3>
  <p> <span>${meal.strArea}</span> Dish</p>
  <p> Belongs to <span>${meal.strCategory}</span> Category</p>`

      const button = document.createElement('button')
      button.innerHTML = 'View Recipe'
      recipeDiv.appendChild(button)

      button.addEventListener('click', function () {
        openRecipePopup(meal)
      })
      recipeContainer.appendChild(recipeDiv)
    })
  } catch (error) {
    recipeContainer.innerHTML = "<h2>Could't find the recipe</h2>"
  }
}
function fetchIngredients(meal) {
  let ingredientesList = ""
  for (i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      const measure = meal[`strMeasure${i}`];
      ingredientesList += `<li>${measure} - ${ingredient}</li>`
    } else {
      break;
    }
  }
  return ingredientesList;
}

function openRecipePopup(meal) {
  recipeDetailContent.innerHTML = `
   <h2 class = "recipeName">${meal.strMeal}</h2>
   <h3>Ingredents :</h3>
   <ul class = "ingredientList">${fetchIngredients(meal)}</ul>
   <div class = "instruction">
    <h3>instruction :</h3>
    <p >${meal.strInstructions}</p>
  </div>
  `

  recipeDetailContent.parentElement.style.display = "block";
}

recipeCloseBtn.addEventListener('click', function () {
  recipeCloseBtn.parentElement.style.display = "none"
})


searchBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const searchInput = searchBox.value.trim()
  if (searchInput === "") {
    recipeContainer.innerHTML = "<h2>please enter a valid name</h2>"
    return;
  }
  fetchRecipe(searchInput)
  searchBox.value = ""

})  