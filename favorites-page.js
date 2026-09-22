let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let favoritesContainer = document.getElementById("favoritesContainer");
let emptyMessage = document.getElementById("emptyMessage");
let recipeData = {
  samosa: {
    name: "Samosa",
    image: "/images/samosa.jpg",
  },

  poha: {
    name: "Poha",
    image: "/images/poha.jpg",
  },

  pasta: {
    name: "Pasta",
    image: "/images/pasta.jpg",
  },

  chowmein: {
    name: "Chowmein",
    image: "/images/chowmein.jpg",
  },

  paneer: {
    name: "Paneer Butter Masala",
    image: "/images/PaneerButterMasala.jpg",
  },

  biryani: {
    name: "Veg Biryani",
    image: "/images/biryani.jpg",
  },

  dosa: {
    name: "Dosa",
    image: "/images/dosa.jpg",
  },

  alooParatha: {
    name: "Aloo Paratha",
    image: "/images/aloo_paratha.jpg",
  },
};
if (favorites.length === 0) {
  emptyMessage.style.display = "block";
} else {
  emptyMessage.style.display = "none";
  favorites.forEach(function (foodName) {
    let recipe = recipeData[foodName];
    if (recipe) {
      let card = document.createElement("div");

      card.className = "favorite-card";

      card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">

                <h3>${recipe.name}</h3>

                <a href="detailedrecipe.html?food=${foodName}">
                    View Recipe
                </a>
            `;

      favoritesContainer.appendChild(card);
    }
  });
}
