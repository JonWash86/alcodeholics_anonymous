function storeIngredients(){
  var spiritSelection = document.selectionForm.spirit.value
  localStorage.setItem('spirit', JSON.stringify(spiritSelection));
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
  console.log('this ran on its own!')
  var storedSpirit = JSON.parse(localStorage.getItem('spirit'));
  var storedIngredients = JSON.parse(localStorage.getItem('ingredients'));
  for (var i = 0; i < vodkaCocktails.length; i++){
    if (storedSpirit = vodkaCocktails[i].spirit){
      var recipeClone = vodkaCocktails[i].rawIngredients.slice();
      console.log('the recipe clone for ' + vodkaCocktails[i].name + ' is ' + recipeClone);
      for (var number = 0; number < storedIngredients.length; number++){
        // console.log('the user-submitted ingredient being examined right now is ' + storedIngredients[number]);
        var match = recipeClone.indexOf(storedIngredients[number])
        if (match >= 0){
          console.log('matched index ' + recipeClone.indexOf(storedIngredients[number]));
          recipeClone.splice((match), 1);
        };
        vodkaCocktails[i].score = recipeClone.length;
        console.log('the remaining ingredients number at ' + recipeClone.length);
      }
    }
  }
}
