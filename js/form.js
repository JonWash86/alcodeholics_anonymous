function storeIngredients(){
  localStorage.setItem('spirit', document.selectionForm.spirit.value);

  var options = [];
  var ingredients = document.getElementsByTagName('input');
  for (var i =0; i < ingredients.length; i++){
    var ingredient = ingredients[i];
    if (ingredient.type == 'checkbox' && ingredient.checked){
      options[options.length] = ingredient.value;
    }
  }
  localStorage.setItem('indredients', options);
  window.location.href="/results.html";

}
