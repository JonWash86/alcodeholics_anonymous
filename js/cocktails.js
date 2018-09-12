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
  var table = document.createElement('TABLE');
  table.setAttribute('class', 'ingredientsTable');
  var body = document.createElement('TBODY');
  table.appendChild(body);
  for (var i = 0; i < allRaw.length; i+=4){
    var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i] + '\' value=\'' + allRaw[i] + '\'>' + allRaw[i] +' </label>&nbsp;';
    var cell = document.createElement('td');
    cell.setAttribute('class', 'ingredientsTable');
    cell.innerHTML = checkTest;
    var row = document.createElement('tr');
    row.appendChild(cell);

    var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i+1] + '\' value=\'' + allRaw[i+1] + '\'>' + allRaw[i +1] +' </label>&nbsp;';
    var cell = document.createElement('td');
    cell.setAttribute('class', 'ingredientsTable');
    cell.innerHTML = checkTest;
    row.appendChild(cell);

    var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i+2] + '\' value=\'' + allRaw[i+2] + '\'>' + allRaw[i+2] +' </label>&nbsp;';
    var cell = document.createElement('td');
    cell.setAttribute('class', 'ingredientsTable');
    cell.innerHTML = checkTest;
    row.appendChild(cell);

    var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i+3] + '\' value=\'' + allRaw[i+3] + '\'>' + allRaw[i+3] +' </label>&nbsp;';
    var cell = document.createElement('td');
    cell.setAttribute('class', 'ingredientsTable');
    cell.innerHTML = checkTest;
    row.appendChild(cell);

    var checkTest = '<label><input type=\'checkbox\' name=\'' + allRaw[i+4] + '\' value=\'' + allRaw[i+4] + '\'>' + allRaw[i+4] +' </label>&nbsp;';
    var cell = document.createElement('td');
    cell.setAttribute('class', 'ingredientsTable');
    cell.innerHTML = checkTest;
    row.appendChild(cell);
    body.appendChild(row);
  };
  container.appendChild(table);
};

window.addEventListener('load', buildBoxes);



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort FOR SORTNG THE RESULTING ARRAY

//ALSO, comb the allCocktailList.rawIngredients for strings and if those strings don't exist, add them to the allRawIngredients array.
