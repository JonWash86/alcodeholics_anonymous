var allRaw = [];

for (var i = 0; i < allCocktailList.length; i++){
    console.log(allCocktailList[i].rawIngredients);
    for (bar = 0; bar < allCocktailList[i].rawIngredients.length; bar++){
      console.log(allCocktailList[i].rawIngredients[bar])
      if (allRaw.indexOf(allCocktailList[i].rawIngredients[bar]) < 0){
        allRaw.push(allCocktailList[i].rawIngredients[bar]);
      };
  };
  allRaw.sort();
  console.log(allRaw);
}



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort FOR SORTNG THE RESULTING ARRAY

//ALSO, comb the allCocktailList.rawIngredients for strings and if those strings don't exist, add them to the allRawIngredients array.
