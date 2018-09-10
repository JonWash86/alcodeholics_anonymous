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
  // window.location.href="/results.html"; This line is a comment until site navigation is ironed out.
}

function scoreMatch(){
  var storedSpirit = JSON.parse(localStorage.getItem('spirit'));
  var storedIngredients = JSON.parse(localStorage.getItem('ingredients'));
  for (var i = 0; i < vodkaCocktails.length; i++){
    if (storedSpirit = vodkaCocktails[i].spirit){
      var recipeClone = vodkaCocktails[i].rawIngredients.slice(0);
      for (var number = 0; number < storedIngredients.length; number++){
        var match = recipeClone.indexOf(storedIngredients[number])
        if (match >= 0){
          recipeClone.splice((match), 1);
        };
        vodkaCocktails[i].score = recipeClone.length;
      }
    }
  }

}


//jc code
//this code should run when user hits submit button
function localIngredients() {
  
  var localSpirit = localStorage.getItem('spirit');   
  localStorage.getItem('ingredients');   
  if (localSpirit === 'localSpirit') {
    allCocktails.sort(function (a, b) {
      return a.score - b.score;
    });

    }
  }



window.addEventListener('load', localIngredients);

