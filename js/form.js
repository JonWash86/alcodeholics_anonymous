
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


function existIng() {
  var storedSpirit = localStorage.getItem('spirit');
  var storedIngredients = JSON.parse(localStorage.getItem('ingredients'));
  for (var i = 0; i < allCocktailList.length; i++){
    if (storedSpirit === allCocktailList[i].spirit){
      for(var storedIngredientsIndex = 0; storedIngredientsIndex < storedIngredients.length; storedIngredientsIndex++) {
        if(allCocktailList[i].rawIngredients.includes(storedIngredients[storedIngredientsIndex])) {
          allCocktailList[i].rawIngredients.splice(storedIngredients[storedIngredientsIndex],1);
        }
      }
    }
  }
}


function scoreMatch(){
  var storedSpirit = localStorage.getItem('spirit');
  var storedIngredients = JSON.parse(localStorage.getItem('ingredients'));
  for (var i = 0; i < allCocktailList.length; i++){
    if (storedSpirit === allCocktailList[i].spirit){
      var recipeClone = allCocktailList[i].rawIngredients.slice();

      for (var number = 0; number < storedIngredients.length; number++){
        var match = recipeClone.indexOf(storedIngredients[number]);
        if (match >= 0){
          recipeClone.splice((match), 1);
        };
        allCocktailList[i].score = recipeClone.length;
      }
    }
  }
}


var localSpirit = localStorage.getItem('spirit').toLowerCase();
function listCocktails() {
  if(!cocktailRecipes[localSpirit]){
    var headerParent = document.getElementById('empty');
    headerParent.classList.remove('hide');
  }

  cocktailRecipes[localSpirit].sort(function (a, b) {
    console.log('we\'ve done the sort:' + cocktailRecipes[localSpirit])
    return a.score - b.score;


  });
  console.log(cocktailRecipes[localSpirit][0].score);

    for(var cocktailIndex = 0; cocktailIndex < cocktailRecipes[localSpirit].length; cocktailIndex++) {
        var score = (cocktailRecipes[localSpirit][cocktailIndex].score);
        if (score === 0){
          var resultsSpace = document.getElementById('resultsSpace');
          console.log(headerParent);
          var headerParent = document.getElementById('header1');
          headerParent.classList.remove('hide');
          // var header = document.createElement('h2');
          // header.innerText = 'Heres what you can make';
          var eachCocktail = document.createElement('div');
          eachCocktail.setAttribute('class', 'cocktail');
          eachCocktail.dataset.drink = cocktailRecipes[localSpirit][cocktailIndex].name;
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
        } else if (score === 1 || score ===2) {
          var resultsSpace = document.getElementById('possibilities');
          var headerParent3 = document.getElementById('header2');
          headerParent3.classList.remove('hide');
          // var head2 = document.createElement('h2');
          // head2.innerText = 'Get more ingredients to mix these up';
          // console.log(head2);

          var eachCocktail = document.createElement('div');
          eachCocktail.setAttribute('class', 'cocktail');
          eachCocktail.dataset.drink = cocktailRecipes[localSpirit][cocktailIndex].name;
          eachCocktail.addEventListener('click', expandPopupResults);
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
        else {
          var resultsSpace = document.getElementById('extras');
          var headerParent3 = document.getElementById('header3');
          headerParent3.classList.remove('hide');
          // var head2 = document.createElement('h2');
          // head2.innerText = 'Get more ingredients to mix these up';
          // console.log(head2);

          var eachCocktail = document.createElement('div');
          eachCocktail.setAttribute('class', 'cocktail');
          eachCocktail.dataset.drink = cocktailRecipes[localSpirit][cocktailIndex].name;
          eachCocktail.addEventListener('click', expandPopupResults);
          var cocktailObject = cocktailRecipes[localSpirit][cocktailIndex];

          console.log(cocktailObject);
          var cocktailImage = document.createElement('img');
          cocktailImage.setAttribute('src', 'images/cocktail_imgs/' + cocktailObject.image);
          var cocktailTitle = document.createElement('h2');
          cocktailTitle.innerText = cocktailObject.name;
          var missingIng = document.createElement('p');
          missingIng.setAttribute('class', 'missingIngredients');
          missingIng.innerText = 'You are missing ' + cocktailObject.score + ' ingredients';
          resultsSpace.appendChild(eachCocktail);
          eachCocktail.appendChild(cocktailImage);
          eachCocktail.appendChild(cocktailTitle);
          eachCocktail.appendChild(missingIng);
        }
      }
      // headerParent.appendChild(header);
      // headerParent2.appendChild(head2);

}

function expandPopupResults(e) {
  console.log(this);
  
  for(var cocktailIndex = 0; cocktailIndex < cocktailRecipes[localSpirit].length; cocktailIndex++) {
    if(this.dataset.drink == cocktailRecipes[localSpirit][cocktailIndex].name) {
      console.log(cocktailRecipes[localSpirit][cocktailIndex].name);
      var popup = document.getElementById('popup');
      popup.classList.remove('hide');
      var popupInner = document.createElement('div');
      popupInner.setAttribute('class', 'popup-inner');
      popup.appendChild(popupInner);
      var imgAndTitle = document.createElement('div');
      imgAndTitle.setAttribute('class', 'imageAndTitle');
      var ingAndDesc = document.createElement('div');
      ingAndDesc.setAttribute('class', 'ingAndDesc');
      popupInner.appendChild(imgAndTitle);
      popupInner.appendChild(ingAndDesc);
      var cocktailImage = document.createElement('img');
      cocktailImage.setAttribute('src', 'images/cocktail_imgs/' + cocktailRecipes[localSpirit][cocktailIndex].image);
      imgAndTitle.appendChild(cocktailImage);
      var cocktailTitle = document.createElement('h2');
      cocktailTitle.innerText = cocktailRecipes[localSpirit][cocktailIndex].name;
      imgAndTitle.appendChild(cocktailTitle);
      var ingTitle = document.createElement('h2');
      ingTitle.innerText = 'Ingredients';
      ingAndDesc.appendChild(ingTitle);
      var ingList = document.createElement('ul');
      for(var ingredientsIndex = 0; ingredientsIndex < cocktailRecipes[localSpirit][cocktailIndex].ingredients.length; ingredientsIndex++) {
        var ingListItem = document.createElement('li');
        ingListItem.innerText = cocktailRecipes[localSpirit][cocktailIndex].ingredients[ingredientsIndex];
        ingList.appendChild(ingListItem);
      }
      ingAndDesc.appendChild(ingList);
      var descTitle = document.createElement('h2');
      descTitle.innerText = 'How To Make';
      ingAndDesc.appendChild(descTitle);

      var howToMakeList = document.createElement('ol');
      var splitHowToMake = cocktailRecipes[localSpirit][cocktailIndex].howToMake.split('.');
      for(var howToMakeSteps = 0; howToMakeSteps < splitHowToMake.length; howToMakeSteps++) {
        var howToMakeStep = document.createElement('li');
        howToMakeStep.innerText = splitHowToMake[howToMakeSteps];
        howToMakeList.appendChild(howToMakeStep);
      }
      ingAndDesc.appendChild(howToMakeList);
      var missIngTitle = document.createElement('p');
      missIngTitle.setAttribute('class', 'missingIngredients')
      missIngTitle.innerText = 'Missing ingredients: ';
      for(var missingIngIndex = 0; missingIngIndex < cocktailRecipes[localSpirit][cocktailIndex].rawIngredients.length; missingIngIndex++) {
        missIngTitle.innerText += cocktailRecipes[localSpirit][cocktailIndex].rawIngredients[missingIngIndex] + ', ';
      }
      ingAndDesc.appendChild(missIngTitle);
      var exitPopup = document.createElement('a');
      exitPopup.setAttribute('class', 'exit-popup');
      exitPopup.innerText = 'X';
      exitPopup.setAttribute('onclick', 'location.reload()');
      popupInner.appendChild(exitPopup);
    }
  }
}