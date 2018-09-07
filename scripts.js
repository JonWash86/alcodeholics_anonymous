function Cocktail(spirit, name, ingredients, image, howToMake) {
    this.spirit = spirit;
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.howToMake = howToMake;
}

var vodkaCocktails = [];
var rumCocktails = [];
var ginkaCocktails = [];
var tequilakaCocktails = [];
var whiskeyCocktails = [];
var cognacCocktails = [];
var allCocktails = [vodkaCocktails, rumCocktails, ginkaCocktails, tequilakaCocktails, whiskeyCocktails, cognacCocktails];

vodkaCocktails.push(new Cocktail('Vodka', 'White Russian', ['1.5 oz Vodka', 'Coffee liqour', 'Milk'], 'cuba_libre.jpg', 'stir with icecubes in a shaker'));
vodkaCocktails.push(new Cocktail('Vodka', 'White Russian', ['1.5 oz Vodka', 'Coffee liqour', 'Milk'], 'cuba_libre.jpg', 'stir with icecubes in a shaker'));
vodkaCocktails.push(new Cocktail('Vodka', 'White Russian', ['1.5 oz Vodka', 'Coffee liqour', 'Milk'], 'cuba_libre.jpg', 'stir with icecubes in a shaker'));
vodkaCocktails.push(new Cocktail('Vodka', 'White Russian', ['1.5 oz Vodka', 'Coffee liqour', 'Milk'], 'cuba_libre.jpg', 'stir with icecubes in a shaker'));
rumCocktails.push(new Cocktail('Rum', 'Mojito', ['2 oz Rum', 'Coke', 'Lemon wedge', 'sugar'], 'mojito.jpg', 'mix with ice and lemon'));
ginkaCocktails.push(new Cocktail());
tequilakaCocktails.push(new Cocktail());
whiskeyCocktails.push(new Cocktail());
cognacCocktails.push(new Cocktail());



function buildCocktailGrid() {
    for(var i = 0; i < allCocktails.length; i++) {
        var allCocktailsDiv = document.getElementById('allCocktailsList');
        var spiritTitle = allCocktails[i][0].spirit;
        var createSpiritDiv = document.createElement('div');
        createSpiritDiv.setAttribute('id', spiritTitle)
        var h2 = document.createElement('h2');
        h2.innerText = spiritTitle + ' Cocktails';
        createSpiritDiv.appendChild(h2);
        allCocktailsDiv.appendChild(createSpiritDiv);

        for(var cocktailIndex = 0; cocktailIndex < allCocktails[i].length; cocktailIndex++) {
            var eachCocktail = document.createElement('div');
            eachCocktail.setAttribute('class', 'cocktail')
            var cocktailImage = document.createElement('img');
            cocktailImage.setAttribute('src', 'img/' + allCocktails[i][cocktailIndex].image);
            var cocktailTitle = document.createElement('h2');
            cocktailTitle.innerText = allCocktails[i][cocktailIndex].name;
            eachCocktail.appendChild(cocktailImage);
            eachCocktail.appendChild(cocktailTitle);
            createSpiritDiv.appendChild(eachCocktail);
        }

    }
}

function expandCocktailPopup(e) {
    var target = e.target;
    console.log(target);
    if(target == 'img') {
        console.log('yes');
    } else {
        console.log('no');
    }
}

function allCocktailsPage() {
    buildCocktailGrid()
    
}

allCocktailsPage();

var cocktailDiv = document.getElementById('allCocktailsList');
cocktailDiv.addEventListener('click',expandCocktailPopup);