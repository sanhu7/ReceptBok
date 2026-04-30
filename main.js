const recipeForm = document.getElementById("recipe-form");
const recipeList = document.getElementById("recipe-list");

const recipes = [];

recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const recipe = {
        title: title,
        category: category,
        description: description
    };

    recipes.push(recipe);
    renderRecipes();
    recipeForm.reset();
});

function renderRecipes() {
    recipeList.innerHTML = "";

    recipes.forEach(function (recipe, index) {
        const recipeCard = document.createElement("article");
        recipeCard.classList.add("recipe-card");

        const recipeTitle = document.createElement("h3");
        recipeTitle.textContent = recipe.title;

        const recipeCategory = document.createElement("p");
        recipeCategory.textContent = "Category: " + recipe.category;

        const recipeDescription = document.createElement("p");
        recipeDescription.textContent = recipe.description;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Ta bort";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function () {
            recipes.splice(index, 1);
            renderRecipes();
        });

        recipeCard.appendChild(recipeTitle);
        recipeCard.appendChild(recipeCategory);
        recipeCard.appendChild(recipeDescription);
        recipeCard.appendChild(deleteButton);

        recipeList.appendChild(recipeCard);
    });
}

