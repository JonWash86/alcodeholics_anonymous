function storeIngredients(){
  var spiritSelection = document.selectionForm.spirit.value
  localStorage.setItem('spirit', spiritSelection);
  var options = [];
  var ingredients = document.getElementsByTagName('input');
  for (var i =0; i < ingredients.length; i++){
    var ingredient = ingredients[i];
    if (ingredient.type == 'checkbox' && ingredient.checked){
      options[options.length] = ingredient.value;
    }
  }
  localStorage.setItem('ingredients', JSON.stringify(options));
  window.location.href="results.html";
}

function scoreMatch(){
  var storedSpirit = localStorage.getItem('spirit');
  var storedIngredients = JSON.parse(localStorage.getItem('ingredients'));
  for (var i = 0; i < allCocktailList.length; i++){
    if (storedSpirit === allCocktailList[i].spirit){
      var recipeClone = allCocktailList[i].rawIngredients.slice();
      for (var number = 0; number < storedIngredients.length; number++){
        var match = recipeClone.indexOf(storedIngredients[number])
        if (match >= 0){
          recipeClone.splice((match), 1);
        };
        allCocktailList[i].score = recipeClone.length;
      }
    }
  }
}


function listCocktails() {
  var localSpirit = localStorage.getItem('spirit').toLowerCase();

  cocktailRecipes[localSpirit].sort(function (a, b) {
    console.log('we\'ve done the sort:' + cocktailRecipes[localSpirit])
    return a.score - b.score;


  });
  console.log(cocktailRecipes[localSpirit][0].score);

    for(var cocktailIndex = 0; cocktailIndex < cocktailRecipes[localSpirit].length; cocktailIndex++) {
        var score = (cocktailRecipes[localSpirit][cocktailIndex].score);
        if (score === 0){

          var resultsSpace = document.getElementById('resultsSpace');
          var headerParent = document.getElementById('header1');
          console.log(headerParent);
          var header = document.createElement('h2');
          header.innerText = 'Heres what you can make';
          var eachCocktail = document.createElement('div');
          eachCocktail.setAttribute('class', 'cocktail');
          eachCocktail.addEventListener('click', expandPopup);
          var cocktailObject = cocktailRecipes[localSpirit][cocktailIndex];

          console.log(cocktailObject);
          var cocktailImage = document.createElement('img');
          cocktailImage.setAttribute('src', 'images/cocktail_imgs/' + cocktailObject.image);
          var cocktailTitle = document.createElement('h2');
          cocktailTitle.innerText = cocktailObject.name;
          // headerParent[0].appendChild(header);
          // headerParent.appendChild(header);
          resultsSpace.appendChild(eachCocktail);
          eachCocktail.appendChild(cocktailImage);
          eachCocktail.appendChild(cocktailTitle);
        } else {
          var resultsSpace = document.getElementById('extras');
          var headerParent2 = document.getElementById('header2');
          var head2 = document.createElement('h2');
          head2.innerText = 'Get more ingredients to mix these up';
          console.log(head2);

          var eachCocktail = document.createElement('div');
          eachCocktail.setAttribute('class', 'cocktail');
          eachCocktail.addEventListener('click', expandPopup);
          var cocktailObject = cocktailRecipes[localSpirit][cocktailIndex];

          console.log(cocktailObject);
          var cocktailImage = document.createElement('img');
          cocktailImage.setAttribute('src', 'images/cocktail_imgs/' + cocktailObject.image);
          var cocktailTitle = document.createElement('h2');
          cocktailTitle.innerText = cocktailObject.name;
          resultsSpace.appendChild(eachCocktail);
          eachCocktail.appendChild(cocktailImage);
          eachCocktail.appendChild(cocktailTitle);
        }
      }
      headerParent.appendChild(header);
      headerParent2.appendChild(head2);

}
