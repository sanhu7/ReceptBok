const recipeForm = document.getElementById("recipe-form");

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
    console.log(recipe);
})