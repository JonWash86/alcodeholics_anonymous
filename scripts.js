function Cocktail(spirit, name, ingredients, image, howToMake) {
    this.spirit = spirit;
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.howToMake = howToMake;
}

var vodkaCocktails = [];
var rumCocktails = [];
var ginCocktails = [];
var tequilakaCocktails = [];
var whiskeyCocktails = [];
var cognacCocktails = [];
var allCocktails = [vodkaCocktails, rumCocktails, ginCocktails, tequilakaCocktails, whiskeyCocktails, cognacCocktails];

vodkaCocktails.push(new Cocktail('Vodka', 'White Russian', ['1.5 oz Vodka', 'Coffee liqour', 'Milk'], 'cuba_libre.jpg', 'stir with icecubes in a shaker'));
ginCocktails.push(new Cocktail('Gin', 'Gin Martini', ['1.5 oz gin', 'Coffee liqour', 'Milk'], 'gin_martini.jpg', 'stir with icecubes in a shaker'));
rumCocktails.push(new Cocktail('Rum', 'Mojito', ['2 oz Rum', 'Coke', 'Lemon wedge', 'sugar'], 'mojito.jpg', 'mix with ice and lemon'));
tequilakaCocktails.push(new Cocktail());
whiskeyCocktails.push(new Cocktail());
cognacCocktails.push(new Cocktail());


// Build each cocktail to the all cocktails page
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
            eachCocktail.setAttribute('class', 'cocktail');
            eachCocktail.addEventListener('click', expandPopup);
            eachCocktail.dataset.drink = allCocktails[i][cocktailIndex].name;
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

// Expand the popup for each cocktail when click
function expandPopup(e) {
     console.log(e.target);
     console.log(this);
    
    for(var allCocktailsLoop = 0; allCocktailsLoop < allCocktails.length; allCocktailsLoop++) {
        for(var eachSpiritLoop = 0; eachSpiritLoop < allCocktails[allCocktailsLoop].length; eachSpiritLoop++) {

            if(this.dataset.drink === allCocktails[allCocktailsLoop][eachSpiritLoop].name) {
            var popup = document.getElementById('popup');
            var popupInner = document.createElement('div');
            var exitPopup = document.createElement('a');
            exitPopup.setAttribute('href', '#');
            exitPopup.setAttribute('onclick', 'location.reload()');
            exitPopup.setAttribute('class', 'exit-popup');
            exitPopup.innerText = 'X';
            popupInner.setAttribute('class', 'popup-inner');
            popup.classList.remove('hide');
            var imgAndTitle = document.createElement('div');
            imgAndTitle.setAttribute('class', 'imageAndTitle');
            var ingAndDesc = document.createElement('div');
            ingAndDesc.setAttribute('class', 'ingAndDesc');
            var imagePopup = document.createElement('img');
            imagePopup.setAttribute('src', 'img/' + allCocktails[allCocktailsLoop][eachSpiritLoop].image);
            var titlePopup = document.createElement('h2');
            titlePopup.innerText = allCocktails[allCocktailsLoop][eachSpiritLoop].name;
            var ingredientsTitle = document.createElement('h2');
            ingredientsTitle.innerText = 'Ingredients';
            var howToMakeTitle = document.createElement('h2');
            howToMakeTitle.innerText = 'How To Make';
            var ingPopup = document.createElement('ul');
            for(var ingLoop = 0; ingLoop < allCocktails[allCocktailsLoop][eachSpiritLoop].ingredients.length; ingLoop++) {
                var liPopup = document.createElement('li');
                liPopup.innerText = allCocktails[allCocktailsLoop][eachSpiritLoop].ingredients[ingLoop];
                ingPopup.appendChild(liPopup);
            }
            var howToMakePopup = document.createElement('p');
            howToMakePopup.innerText = allCocktails[allCocktailsLoop][eachSpiritLoop].howToMake;

            imgAndTitle.appendChild(imagePopup);
            imgAndTitle.appendChild(titlePopup);
            ingAndDesc.appendChild(ingredientsTitle);
            ingAndDesc.appendChild(ingPopup);
            ingAndDesc.appendChild(howToMakeTitle);
            ingAndDesc.appendChild(howToMakePopup);
            popupInner.appendChild(imgAndTitle);
            popupInner.appendChild(ingAndDesc);
            popupInner.appendChild(exitPopup);
            popup.appendChild(popupInner);

            }
        }
    }
}


function allCocktailsPage() {
    buildCocktailGrid()
}

window.addEventListener('load', allCocktailsPage);