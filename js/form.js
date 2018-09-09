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
    }
  }
}
