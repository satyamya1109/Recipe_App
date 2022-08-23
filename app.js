const appId = "cdf0340e";
const appKey = "5197d82b556084e2d523975c50948a40";




const search_form = document.querySelector(".search_bar");
const recipe_item = document.querySelector(".search-result");
search_form.addEventListener('submit', get_recipes);

function get_recipes(event) {
    event.preventDefault();
    const target = event.target;
    const input_query = target.querySelector("input").value;
    const requested_url = `https://api.edamam.com/search?q=${input_query}&app_id=${appId}&app_key=${appKey}&from=0&to=100`;
    fetch(requested_url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const result = data.hits;
        recipe_item.innerHTML = "";
        result.forEach(element => {
            generateHTML(element);
        });
    });

}
function generateHTML(element) {
    const name = element.recipe.label;
    const cal = element.recipe.calories;
    const img = element.recipe.image;
    const url =element.recipe.url;
    let item = `<div class="item">
        <img alt="img" src = "${img}">
    <p class="recipe-name"> ${name} </p>
    <button class="view-btn"><a href="${url}" target="_blank">View Recipe</a></button>
    <p class="recipe-cal">Calorie: ${cal.toFixed(2)} </p>
    </div>`;
    recipe_item.innerHTML += item;
    console.log(element);

}