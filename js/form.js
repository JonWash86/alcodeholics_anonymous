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

function grabInput(){
  console.log('grab input has been pressed')
  var storedSpirit = JSON.parse(localStorage.getItem('spirit'));
  var storedIngredients = JSON.parse(localStorage.getItem('ingredients'));
  console.log('so far so good')
  for (var i = 0; i < vodkaCocktails.length; i++){
    console.log('the loop is iterating for the ' + i + 'th time.');
    if (storedSpirit = vodkaCocktails[i].spirit){
      console.log('the spirit matches and belongs to '+ vodkaCocktails[i].name);
      var recipeClone = vodkaCocktails[i].rawIngredients.slice(0);
      for (var number = 0; number < storedIngredients.length; number++){
        console.log(recipeClone);

        var match = recipeClone.indexOf(storedIngredients[number])
        console.log(match);
        if (match >= 0){
          recipeClone.splice((match), 1);
        };

        console.log(recipeClone);


        // for (var foo = 0; foo < storedIngredients.length; foo++){
        //   console.log('confusing enough? The current user ingredient is ' + storedIngredients[foo] + ' and the current recipe ingredient is ' + recipeClone[number]);
        //   if (recipeClone[number] == storedIngredients[foo]){
        //     break;
        //   }
        //   else{
        //     vodkaCocktails[i].itemsMissing += 1;
        //
        //     console.log('Ok! ' +storedIngredients[foo] + ' does not match. Now the items missing for the '+ vodkaCocktails[i].name +  ' cocktail is ' + vodkaCocktails[i].itemsMissing);
        //   }
        // }
      }
    }
  }
}
