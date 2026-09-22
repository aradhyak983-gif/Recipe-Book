let favoriteBtn = document.querySelectorAll(".favorite-btn");
favoriteBtn.forEach(function (button) {
  let foodName = button.getAttribute("data-food");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.includes(foodName)) {
    button.innerText = "♥";
    button.classList.add("active");
  }
  button.addEventListener("click", function () {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(foodName)) {
      favorites = favorites.filter(function (item) {
        return item !== foodName;
      });
      button.innerText = "♡";
      button.classList.remove("active");
    } else {
      favorites.push(foodName);
      button.innerText = "♥";
      button.classList.add("active");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  });
});
