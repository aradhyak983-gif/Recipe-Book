const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const recipeCards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

function searchRecipes() {
  const searchText = searchInput.value.toLowerCase().trim();
  let foundRecipes = 0;
  recipeCards.forEach(function (card) {
    const ingredients = card.getAttribute("data-ingredients");

    const recipeName = card.querySelector("h3").textContent.toLowerCase();

    if (
      searchText === "" ||
      ingredients.toLowerCase().includes(searchText) ||
      recipeName.includes(searchText)
    ) {
      card.style.display = "flex";
      foundRecipes++;
    } else {
      card.style.display = "none";
    }
  });
  if (foundRecipes === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}

searchButton.addEventListener("click", searchRecipes);

searchInput.addEventListener("input", searchRecipes);

searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    searchRecipes();
  }
});
