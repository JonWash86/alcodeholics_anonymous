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
   localStorage.setItem('ingredients', options); // 
  // window.location.href="/results.html";

 
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

