const recipeForm = document.getElementById("recipe-form");
const recipeList = document.getElementById("recipe-list");
const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const submitButton = recipeForm.querySelector("button[type='submit']");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
let editIndex = null;

renderRecipes();


recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const recipe = {
        title: titleInput.value,
        category: categoryInput.value,
        description: descriptionInput.value,
    };

    if (editIndex === null) {
        recipes.push(recipe);
    } else {
        recipes[editIndex] = recipe;
        editIndex = null;
        submitButton.textContent = "Spara recept";
    }
    saveRecipes();
    renderRecipes();
    recipeForm.reset();
});

function renderRecipes() {
    recipeList.innerHTML = "";

    if (recipes.length === 0) {
        recipeList.textContent = "Inga recept tillagda än.";
        return;
    }

    recipes.forEach(function (recipe, index) {
        const recipeCard = document.createElement("article");
        recipeCard.classList.add("recipe-card");

        const recipeTitle = document.createElement("h3");
        recipeTitle.textContent = recipe.title;

        const recipeCategory = document.createElement("p");
        recipeCategory.textContent = "Kategori: " + recipe.category;

        const recipeDescription = document.createElement("p");
        recipeDescription.textContent = recipe.description;

        const editButton = document.createElement("button");
        editButton.textContent = "Redigera";
        editButton.classList.add("edit-button");

        editButton.addEventListener("click", function () {
            titleInput.value = recipe.title;
            categoryInput.value = recipe.category;
            descriptionInput.value = recipe.description;

            editIndex = index;
            submitButton.textContent = "Uppdatera recept";
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Ta bort";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function () {
            recipes.splice(index, 1);

            if (editIndex === index) {
                editIndex = null;
                recipeForm.reset();
                submitButton.textContent = "Spara recept";
            }
            saveRecipes();
            renderRecipes();
        });

        recipeCard.appendChild(recipeTitle);
        recipeCard.appendChild(recipeCategory);
        recipeCard.appendChild(recipeDescription);
        recipeCard.appendChild(editButton);
        recipeCard.appendChild(deleteButton);

        recipeList.appendChild(recipeCard);
    });
}

function saveRecipes() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}
