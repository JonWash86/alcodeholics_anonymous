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
  var storedSpirit = JSON.parse(localStorage.getItem('spirit'));
  var storedIngredients = JSON.parse(localStorage.getItem('ingredients'));
  for (var i = 0; i < allCocktailList.length; i++){
    if (storedSpirit === allCocktailList[i].spirit){
      console.log('The spirit of ' + allCocktailList[i].name + ' matches the user input of ' + storedSpirit)
      var recipeClone = allCocktailList[i].rawIngredients.slice();
      console.log('the recipe clone for ' + allCocktailList[i].name + ' is ' + recipeClone);
      for (var number = 0; number < storedIngredients.length; number++){
        // console.log('the user-submitted ingredient being examined right now is ' + storedIngredients[number]);
        var match = recipeClone.indexOf(storedIngredients[number])
        if (match >= 0){
          console.log('matched index ' + recipeClone.indexOf(storedIngredients[number]));
          recipeClone.splice((match), 1);
        };

        vodkaCocktails[i].score = recipeClone.length;
      }
    }
  }

}


//jc code
//this code should run when user hits submit button
function listCocktails() {
  
  var localSpirit = localStorage.getItem('spirit');   
  cocktailRecipes[localSpirit].sort(function (a, b) {
      return a.score - b.score;
    });

    for(var cocktailIndex = 0; cocktailIndex < allCocktails[i].length; cocktailIndex++) {
      var eachCocktail = document.createElement('div');
      eachCocktail.setAttribute('class', 'cocktail');
      eachCocktail.addEventListener('click', expandPopup);
      eachCocktail.dataset.drink = allCocktails[i][cocktailIndex].name;
      var cocktailImage = document.createElement('img');
      cocktailImage.setAttribute('src', 'images/cocktail_imgs/' + allCocktails[i][cocktailIndex].image);
      var cocktailTitle = document.createElement('h2');
      cocktailTitle.innerText = allCocktails[i][cocktailIndex].name;
      eachCocktail.appendChild(cocktailImage);
      eachCocktail.appendChild(cocktailTitle);
      createSpiritDiv.appendChild(eachCocktail);
  }
    

    
  }



window.addEventListener('load', localIngredients);


        allCocktailList[i].score = recipeClone.length;
        console.log('the remaining ingredients number at ' + recipeClone.length);
      };
    };
  };
};
