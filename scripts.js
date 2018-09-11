function Cocktail(spirit, name, ingredients, image, howToMake, rawIngredients) {

    this.spirit = spirit;
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.howToMake = howToMake;
    this.score = 100;
    this.rawIngredients= rawIngredients;

}
//goal: sort all vodka cocktail from 0 items missing in order
//loop through rawIngredients, if 100% match display first

var vodkaCocktails = [];
var rumCocktails = [];
var ginCocktails = [];
var tequilaCocktails = [];
var whiskeyCocktails = [];
var cognacCocktails = [];

//oirignal code/ replaced with line 26 in order to be able to list in order.
// var allCocktails = [vodkaCocktails, rumCocktails, ginCocktails, tequilaCocktails, whiskeyCocktails, cognacCocktails];// changeed tequilakaCocktails to tequilacocktails

var allCocktails = {vodka: vodkaCocktails, rum: rumCocktails, gin: ginCocktails, tequila: tequilaCocktails, whiskey: whiskeyCocktails, cognac: cognacCocktails};// changeed tequilakaCocktails to tequilacocktails


vodkaCocktails.push(new Cocktail('Vodka', 'White Russian', ['1.5 oz Vodka', 'Coffee liquor', 'Milk'], 'cuba_libre.jpg', 'stir with ice cubes in a shaker', ['coffee liqueur', 'heavy cream']));

vodkaCocktails.push(new Cocktail('Vodka', 'Sea Breeze', ['1.5 oz Vodka', '4 oz cranberry juice', '1 oz grapefruit juice'], 'sea_breeze.jpg', 'Combine vodka, cranberry juice, and grapefruit juice in a highball glass and stir to combine. Add ice. <br> Garnish with a wedge of lime.',[ 'cranberry juice', 'grapefruit juice']));

vodkaCocktails.push(new Cocktail('Vodka', 'Vodka Martini', ['3 oz Vodka', '1 oz dry vermouth', '3 olives'], 'vodka_martini.jpg', 'Combine vodka and dry vermouth in a cocktail mixing glass. Fill with ice and stir until chilled. Strain into a chilled martini glass.<br> Garnish with three olives on a toothpick.', [ 'dry vermouth', 'olives']));

vodkaCocktails.push(new Cocktail('Vodka', 'Cosmopolitan', ['1.5 oz Vodka', '1/4 oz  lime juice', '1/4 oz triple sec', '1/4 oz  cranberry juice', '1 cup ice', '1 lime wedge for garnish'], 'cuba_libre.jpg', 'Combine vodka, lime juice, triple sec, and cranberry juice in a cocktail shaker. Add ice, cover and shake until chilled. Strain into a chilled cocktail glass.<br> Garnish with a lime wedge.', ['lime', 'triple sec', 'cranberry juice']));

vodkaCocktails.push(new Cocktail('Vodka', 'Old Glory', ['2 oz Vodka', '8-10 blueberries', '1 oz fresh lemon juice', '1-2 oz Oregon Pinot Noir'], 'old_glory.jpg', 'Muddle fresh blueberries at the bottom of a double old fashioned glass and top with ice. Add vodka, lemon, and simple syrup to a mixing glass and shake vigorously until chilled and combined. Strain over ice and blueberries. Carefully pour wine over a spoon into the cocktail to create a red wine \"float.\"', ['triple sec', 'cranberry juice',  'lime']));

whiskeyCocktails.push(new Cocktail('Whiskey', 'Old Fashioned', ['1 oz Whiskey', '2 DASHES BITTERS', '1 SUGAR CUBE', 'ORANGE PEEL (FOR GARNISH'], 'old_glory.jpg', 'In an Old-Fashioned glass, muddle the sugar and bitters.<br>Add a large ice cube.<br>Add whiskey on top of the muddled sugar and stir with your bar spoon.<br>Garnish with a orange twist (if desired).'));

whiskeyCocktails.push(new Cocktail('Whiskey', 'Manhattan', ['2 oz Whiskey', '1 oz sweet vermouth', '2 dashes orange bitters', '1 dash angostura bitters', '1 cherry'], 'manhattan.jpg', 'Stir all ingredients with ice and strain into a chilled coupe glass.<br>Serve with a brandied cherry.'));

whiskeyCocktails.push(new Cocktail('Whiskey', 'Irish Coffee', ['2 oz Irish Whiskey', '4 OZ coffee', '.5 oz simple syrup', 'whipped cream', 'fresh grated nutmeg(optional)'], 'irish_coffee.jpg', 'Pour the simple syrup and whiskey into a glass mug, then add the coffee.<br> Fill the small half of a cocktail tin halfway with heavy cream. Shake the cream in the shaker until it is almost solid (you’ll be able to hear the difference).<br>Top the coffee off with your shaken cream. If done correctly the whipped cream will sit on top of the coffee and create two distinct layers.<br>Using a microplane, grate fresh nutmeg on top of the cream and serve.'));
whiskeyCocktails.push(new Cocktail('Whiskey', 'Whiskey and Coke', ['2 oz Whiskey', '4 oz Coke'], "whiskey_coke.jpg", 'pour over glass of ice and enjoy' ));
whiskeyCocktails.push(new Cocktail('Whiskey', 'Loud Beat', ['1.5 oz Whiskey', '1 Sugar Cube', 'Mint ', '4 oz simple Syrup'], 'loud_beat.jpg', 'Shake with crushed ice'));
ginCocktails.push(new Cocktail('Gin', 'Gin and Tonic', ['2 oz gin', '3-4 oz tonic water'], 'gin_tonic.jpg', 'Add gin to a highball glass filled with ice. Squeeze in lime wedges to taste<br> Add them to glass. Add tonic water; stir to combine.'));
ginCocktails.push(new Cocktail('Gin', 'Negroni', ['1 oz gin', ' 1 oz campari', '1 oz sweet vermouth ', 'sugar'], 'negroni.jpg', 'Add all the ingredients into a mixing glass with ice, and stir until well-chilled.<br>Strain into a rocks glass filled with large ice cubes.<br>Garnish with an orange peel.'));
ginCocktails.push(new Cocktail('Gin', 'Tom Collins', ['3/4 lemon juice', 'Coke', '3/4 oz simple syrup', 'club soda'], 'tom_collins.jpg', 'Add the lemon juice, simple syrup and gin into a shaker with ice and shake well.<br>Strain into a highball or Collins glass over fresh ice.<br>Top with club soda.<br>Garnish with a lemon wheel and cherry, and serve with a straw.'));
ginCocktails.push(new Cocktail('Gin', 'Gimlet', ['2.5 oz gin', '.5 oz lime juice', '.5 oz simple syrup'], 'gimlet.jpg', 'Add all the ingredients into a shaker with ice and shake.<br>Strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice.<br>Garnish with a lime wheel.<br>(You can substitute 1 oz lime cordial, such as Rose\'s Lime Juice, for both the lime juice and simple syrup).'));
ginCocktails.push(new Cocktail('Gin', 'Gin Fizz', ['2 oz gin', '1 oz lemon juice', '3/4 oz simple syrup'], 'gin_fizz.jpg', 'Add all the ingredients into a shaker with ice and shake.<br>Strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice.<br>Garnish with a lime wheel.<br>(You can substitute 1 oz lime cordial, such as Rose\'s Lime Juice, for both the lime juice and simple syrup).'));
ginCocktails.push(new Cocktail('Gin', 'Salty dog', ['1.5 oz gin', '3 oz grapefruit juice', '4tsp salt', 'sugar'], 'salty_dog.jpg', 'Rim a highball glass with salt.<br>Shake the vodka (or gin) and grapefruit juice, pour over ice in a highball glass.<br>Garnish with a grapefruit slice.'));
ginCocktails.push(new Cocktail('Gin', 'Gin Martini', ['1 oz gin', '1dry vermouth', 'olives'], 'gin_martini.jpg', 'pour over ice.<br> stir or shake to taste'));
rumCocktails.push(new Cocktail('Rum', 'Mojito', ['1.5 oz rum', 'mint leaves', '3/4 oz simple syrup', '1.5 club soda'], 'mojito.jpg', 'In a shaker, lightly muddle the mint.<br>Add the simple syrup, lime juice and rum, and fill with ice.<br>Shake well and pour (unstrained) into a highball glass.<br>Top with the club soda and garnish with a mint sprig.'));
rumCocktails.push(new Cocktail('Rum', 'Mai Tai', ['2 oz Rum', '3/4 oz lime juice', '1/4 rock candy syrup (simple syrup with a 2 parts sugar to 1 part water ratio)', '1/4 orgeat almond syrup', '.5 orange curacao'], 'mai_tai.jpg', 'Add all the ingredients to a shaker and fill with crushed ice.<br>Shake vigorously until the shaker is well-chilled and frosty on the outside.<br>Pour (unstrained) into a double Old Fashioned glass.<br>Garnish with half of a juiced lime and a fresh mint sprig.'));
rumCocktails.push(new Cocktail('Rum', 'Pina Colada', ['1.5 oz Rum', '2 oz coconut milk', '2 oz pineapple juice', 'sugar'], 'pina_colada.jpg', 'To make the Piña Colada add all the ingredients to a shaker and fill with ice.<br> Shake, and strain into a Hurricane glass filled with fresh ice.<br>(You may also blend all the ingredients with crushed ice instead.) Garnish with a cherry and a pineapple wedge.'));
rumCocktails.push(new Cocktail('Rum', 'Daiquiri', ['2 oz Rum', '3/4 oz lime juice,', '3/4oz demerara (turbinado) sugar syrup'],//might need to reconsider the last ingredient here
'daiquiri.jpg', 'Add all the ingredients into a shaker with ice, and shake until well-chilled.<br>Strain into a chilled coupe.<br>Garnish with a lime twist.'));
rumCocktails.push(new Cocktail('Rum', 'Dark n Stormy', ['1.5 oz Rum (dark)', 'ginger beer '], 'dark_n_stormy.jpg', 'Fill a tall glass with ice, and add the rum.<br>Top with the ginger beer.<br>Garnish with a lime wedge'));
rumCocktails.push(new Cocktail('Rum', 'Rum Punch (serves 6)', ['1.5 oz Rum(light)', '1.5 oz orange juice', '.5 oz grapefruit juice', '1 oz cranberry juice'], 'rum_punch.jpg', 'Combine all ingredients in a pitcher and stir'));
rumCocktails.push(new Cocktail('Rum', 'Rum and coke (Cuba Libre)', ['1 oz Rum(light)', ' 3 oz coke'], 'cuba_libre.jpg', 'Pour over ice, stir and enjoy!'));
tequilaCocktails.push(new Cocktail('Tequila', 'Horny Bull', ['2 oz tequila', ' 3 Orange juice'], 'horny_bull.jpg', 'Fill tall glass with ice and pour in tequila. Stir 2-3 times<br>Top off with OJ and serve.'));
tequilaCocktails.push(new Cocktail('Tequila', 'Juan Collins', ['4.5 oz tequila (Hornitos Plata Tequila recommended)', '1.5 oz lemon juice', '1 tsp. sugar', '9 oz. club soda'], 'juan_collins.jpg', 'Rim glass with salt or sugar.<br> Fill glass with ice. Add tequila and lime juice, and stir.<br> Top off with grapefruit juice and soda.<br> Stir again.<br> Garnish and serve.!'));
tequilaCocktails.push(new Cocktail('Tequila', 'Salty Chihuahua (with Lemonade)', ['1.5 oz tequila', ' 5 oz lemonade', 'splash of lime juice', 'Lime wedge, and coarse salt or sugar for garnish (optional)'], 'salty_chihuhuahu.jpg', 'Rim glass with salt or sugar.<br> Fill glass with ice.<br> Pour in tequila and lemonade.<br> Squeeze and drop in lime wedge for a splash of lime juice.<br> Stir and serve.'));
tequilaCocktails.push(new Cocktail('Tequila', 'Tequila Sunrise', ['1.5 oz tequila', ' 3 oz orange juice', '1/2 oz. grenadine syrup', 'Orange Slice/Maraschino Cherry (for garnish)'], 'tequila_sunrise.jpg', 'Add ice to tall glass and pour over tequila and orange juice.<br>Slowly add the grenadine which will sink to the bottom of the glass.<br>Garnish with an orange slice and a maraschino cherry.'));
tequilaCocktails.push(new Cocktail('Tequila', 'Tommy\'s margarita', ['2 oz tequila', ' 1 ounce lime juice (preferably squeezed)', '.5 oz agave syrup'], 'tommys_margarita.jpg', 'Combine all ingredients in a shaker over ice.<br> Shake to chill<br> Strain over fresh ice. <br>Salt garnish (optional).'));
tequilaCocktails.push(new Cocktail('Tequila', 'Tequila Negroni', ['1 oz tequila', ' 1 Campari', '1 sweet red vermouth'], 'tequila_negrroni.jpg', 'Combine all ingredients in a lowball glass with ice<br> Stir to chill.<br> Dilute slightly.'));
tequilaCocktails.push(new Cocktail('Tequila', 'Tequila soda', ['2 oz tequila', ' 3 oz club soda', 'Lime wedge'], 'tequila_soda.jpg', 'Pour the tequila over ice in a tall glass. <br> Fill with club soda. <br>  Squeeze in lime wedge, and enjoy.'));
cognacCocktails.push(new Cocktail('cognac', 'Sidecar', ['2 oz cognac', ' 1 oz lemon juice', '.5 oz simple syrup'], 'tequila_soda.jpg', 'Rim a coupe glass with sugar (or don’t… this is America, and we’re not gonna tell you what to do).<br> Shake all ingredients with ice until chilled.<br> Strains <br> Serve straight up.'));

cognacCocktails.push(new Cocktail('cognac', 'Spiked Coffee', ['2 oz cognac', ' 4 ounces coffee', '1 ounce Kahlua'], 'spiked_coffee.jpg','Pour the Kahlua and Cognac into your coffee.<br> Stir and wake up.'));
cognacCocktails.push(new Cocktail('cognac', 'Cognac Manhattan', ['2 oz cognac', ' 3/4 red vermouth', '2 dashes bitters'], 'cognac_manhattan.jpg', 'Stir all ingredients together with ice until chilled.<br> Strain into a glass.<br> Serve and enjoy.'));
cognacCocktails.push(new Cocktail('cognac', 'Spiked cider', ['2 oz cognac', ' 4 oz apple cider', 'Orange peel'], 'spiked_cider.jpg', 'Combine the cider and Cognac over ice.<br> Twist the orange peel to release the oils over the top of the drinks.<br> Then sink it in.'));
cognacCocktails.push(new Cocktail('cognac', 'Ode To Tiki', ['2 oz cognac', ' 1 oz orgeat', '1 oz lemon juice'], 'ode_to_tiki.jpg', 'Shake all ingredients over ice.<br> pour into a glass. <br> Enjoy!'));

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
            cocktailImage.setAttribute('src', 'images/cocktail_imgs/' + allCocktails[i][cocktailIndex].image);
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
            imagePopup.setAttribute('src', 'images/cocktail_imgs/' + allCocktails[allCocktailsLoop][eachSpiritLoop].image);
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
