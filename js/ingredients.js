function Cocktail(spirit, name, ingredients, image, howToMake, rawIngredients) {

    this.spirit = spirit;
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.howToMake = howToMake;
    this.score = 100;
    this.breakSteps = this.howToMake.split('.');
    this.rawIngredients= rawIngredients;

}

var vodkaCocktails = [];
var rumCocktails = [];
var ginCocktails = [];
var tequilaCocktails = [];
var whiskeyCocktails = [];
var cognacCocktails = [];


var allCocktails = [vodkaCocktails, rumCocktails, ginCocktails, tequilaCocktails, whiskeyCocktails, cognacCocktails];

var cocktailRecipes = {vodka: vodkaCocktails, rum: rumCocktails, gin: ginCocktails, tequila: tequilaCocktails, whiskey: whiskeyCocktails, cognac: cognacCocktails};


// oirignal code replaced with line 26 in order to be able to list in order.
var allCocktails = [vodkaCocktails, rumCocktails, ginCocktails, tequilaCocktails, whiskeyCocktails, cognacCocktails];

var allRaw = [];

function buildRaw(){
  for (var i = 0; i < allCocktailList.length; i++){
      for (bar = 0; bar < allCocktailList[i].rawIngredients.length; bar++){
        if (allRaw.indexOf(allCocktailList[i].rawIngredients[bar]) < 0){
          allRaw.push(allCocktailList[i].rawIngredients[bar]);
        };
    };
    allRaw.sort();
  }
};

buildRaw();

function buildBoxes(){
  var container = document.getElementById('checkBoxSpace');
  console.log('I am building boxes' + allRaw);
  var table = document.createElement('TABLE');
  table.setAttribute('class', 'ingredientsTable');
  var body = document.createElement('TBODY');
  table.appendChild(body);
  for (var i = 0; i < allRaw.length; i+=5){
    var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i] + '\' value=\'' + allRaw[i] + '\'>' + allRaw[i] +' </label>&nbsp;';
    var cell = document.createElement('td');
    cell.setAttribute('class', 'ingredientsTable');
    cell.innerHTML = checkTest;
    var row = document.createElement('tr');
    row.appendChild(cell);

    if (allRaw[i + 1]!= undefined){
      var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i+1] + '\' value=\'' + allRaw[i+1] + '\'>' + allRaw[i +1] +' </label>&nbsp;';
      var cell = document.createElement('td');
      cell.setAttribute('class', 'ingredientsTable');
      cell.innerHTML = checkTest;
      row.appendChild(cell);
    }
    if (allRaw[i +2]!= undefined){
      var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i+2] + '\' value=\'' + allRaw[i+2] + '\'>' + allRaw[i+2] +' </label>&nbsp;';
      var cell = document.createElement('td');
      cell.setAttribute('class', 'ingredientsTable');
      cell.innerHTML = checkTest;
      row.appendChild(cell);
    }
    if (allRaw[i +3]!= undefined){
      var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i+3] + '\' value=\'' + allRaw[i+3] + '\'>' + allRaw[i+3] +' </label>&nbsp;';
      var cell = document.createElement('td');
      cell.setAttribute('class', 'ingredientsTable');
      cell.innerHTML = checkTest;
      row.appendChild(cell);
    }
    if (allRaw[i +4]!= undefined){
      console.log('checking out ' + allRaw[i +4])
      var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i+4] + '\' value=\'' + allRaw[i+4] + '\'>' + allRaw[i+4] +' </label>&nbsp;';
      var cell = document.createElement('td');
      cell.setAttribute('class', 'ingredientsTable');
      cell.innerHTML = checkTest;
      row.appendChild(cell);
    };
    body.appendChild(row);
  };
  container.appendChild(table);
};
