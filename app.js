function handleSearch() {
  var div = document.getElementById("cardDiv");
  const query = $("#searchInput").val();
//   const url =
//     "https://www.food2fork.com/api/search?key=a9f512078036f765d8cb7b8a968864e6&q=" +
//     query;
  fetch("recipe.json")
    .then(resp => {
      resp.json().then(data => {
        console.log(data);
        return data.recipes.map(function(recipe) {
          console.log(recipe);
          div.innerHTML += `
          <div class = "card col-sm-12 col-md-4 my-3 mx-auto">
            <div class="img-wrapper">
              <img class = card-img" src = "${recipe.image_url}">
            </div>
            <div class = "card-body">
              <h5 class = "card-title"><a href="${recipe.source_url}">${recipe.title}</a></h5>
              <p class = "card-text"><b>Source: </b><a href="${recipe.publisher_url}">${recipe.publisher}</a></p>
          </div>
        </div>
          `;
        });
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}

