const recipeForm = document.getElementById("recipe-form");
const recipeList = document.getElementById("recipe-list");

recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const recipeCard = document.createElement("article");
    recipeCard.classList.add("recipe-card");

    const recipeTitle = document.createElement("h3");
    recipeTitle.textContent = title;

    const recipeCategory = document.createElement("p");
    recipeCategory.textContent = "Category: " + category;

    const recipeDescription = document.createElement("p");
    recipeDescription.textContent = description;

    recipeCard.appendChild(recipeTitle);
    recipeCard.appendChild(recipeCategory);
    recipeCard.appendChild(recipeDescription);

    recipeList.appendChild(recipeCard);

    recipeForm.reset();


})