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


vodkaCocktails.push(new Cocktail('vodka', 'White Russian', ['1.5 oz Vodka', 'Coffee liquor', 'Milk'], 'white_russian.jpg', 'stir with ice cubes in a shaker', ['coffee liqueur', 'heavy cream']));

vodkaCocktails.push(new Cocktail('vodka', 'Sea Breeze', ['1.5 oz Vodka', '4 oz cranberry juice', '1 oz grapefruit juice'], 'sea_breeze.jpg', 'Combine vodka, cranberry juice, and grapefruit juice in a highball glass and stir to combine. Add ice.  Garnish with a wedge of lime',['cranberry juice', 'grapefruit juice']));

vodkaCocktails.push(new Cocktail('vodka', 'Vodka Martini', ['3 oz Vodka', '1 oz dry vermouth', '3 olives'], 'vodka_martini.jpg', 'Combine vodka and dry vermouth in a cocktail mixing glass. Fill with ice and stir until chilled. Strain into a chilled martini glass. Garnish with three olives on a toothpick', ['dry vermouth', 'olives']));

vodkaCocktails.push(new Cocktail('vodka', 'Cosmopolitan', ['1.5 oz Vodka', '1/4 oz  lime juice', '1/4 oz triple sec', '1/4 oz  cranberry juice', '1 cup ice', '1 lime wedge for garnish'], 'cosmopolitan.jpg', 'Combine vodka, lime juice, triple sec, and cranberry juice in a cocktail shaker. Add ice, cover and shake until chilled. Strain into a chilled cocktail glass. Garnish with a lime wedge', ['lime', 'triple sec', 'cranberry juice']));

vodkaCocktails.push(new Cocktail('vodka', 'Old Glory', ['2 oz Vodka', '8-10 blueberries', '1 oz fresh lemon juice', '1-2 oz Oregon Pinot Noir'], 'old_glory.jpg', 'Muddle fresh blueberries at the bottom of a double old fashioned glass and top with ice. Add vodka, lemon, and simple syrup to a mixing glass and shake vigorously until chilled and combined. Strain over ice and blueberries. Carefully pour wine over a spoon into the cocktail to create a red wine \"float\"', ['triple sec', 'cranberry juice',  'lime', 'pinot noir']));

whiskeyCocktails.push(new Cocktail('whiskey', 'Old Fashioned', ['1 oz Whiskey', '2 dashes bitters', '1 sugar cube', 'orange peel (for garnish)'], 'old_glory.jpg', 'In an Old-Fashioned glass, muddle the sugar and bitters.Add a large ice cube.Add whiskey on top of the muddled sugar and stir with your bar spoon.Garnish with a orange twist (if desired)', ['bitters', 'sugar', 'orange']));

whiskeyCocktails.push(new Cocktail('whiskey', 'Manhattan', ['2 oz Whiskey', '1 oz sweet vermouth', '2 dashes orange bitters', '1 dash angostura bitters', '1 cherry'], 'manhattan.jpg', 'Stir all ingredients with ice and strain into a chilled coupe glass.Serve with a brandied cherry',['sweet vermouth', 'bitters', 'cherry']));

whiskeyCocktails.push(new Cocktail('whiskey', 'Irish Coffee', ['2 oz Irish Whiskey', '4 OZ coffee', '.5 oz simple syrup', 'whipped cream', 'fresh grated nutmeg(optional)'], 'irish_coffee.jpg', 'Pour the simple syrup and whiskey into a glass mug, then add the coffee. Fill the small half of a cocktail tin halfway with heavy cream. Shake the cream in the shaker until it is almost solid (you’ll be able to hear the difference).Top the coffee off with your shaken cream. If done correctly the whipped cream will sit on top of the coffee and create two distinct layers.Using a microplane, grate fresh nutmeg on top of the cream and serve', ['coffee', 'sugar', 'heavy cream']));
whiskeyCocktails.push(new Cocktail('whiskey', 'Whiskey and Coke', ['2 oz Whiskey', '4 oz Coke'], "whiskey_coke.jpg", 'pour over glass of ice and enjoy' , ['coke']));
whiskeyCocktails.push(new Cocktail('whiskey', 'Loud Beat', ['1.5 oz Whiskey', '1 Sugar Cube', 'Mint ', '4 oz simple Syrup'], 'loud_beat.jpg', 'Shake with crushed ice', ['mint', 'sugar']));
ginCocktails.push(new Cocktail('gin', 'Gin and Tonic', ['2 oz gin', '3-4 oz tonic water'], 'gin_tonic.jpg', 'Add gin to a highball glass filled with ice. Squeeze in lime wedges to taste Add them to glass. Add tonic water; stir to combine', ['tonic water']));
ginCocktails.push(new Cocktail('gin', 'Negroni', ['1 oz gin', ' 1 oz campari', '1 oz sweet vermouth ', 'sugar'], 'negroni.jpg', 'Add all the ingredients into a mixing glass with ice, and stir until well-chilled.Strain into a rocks glass filled with large ice cubes.Garnish with an orange peel', ['campari', 'sweet vermouth', 'sugar']));
ginCocktails.push(new Cocktail('gin', 'Tom Collins', ['3/4 lemon juice', 'Coke', '3/4 oz simple syrup', 'club soda'], 'tom_collins.jpg', 'Add the lemon juice, simple syrup and gin into a shaker with ice and shake well.Strain into a highball or Collins glass over fresh ice.Top with club soda.Garnish with a lemon wheel and cherry, and serve with a straw', ['lemon', 'coke', 'sugar', 'club soda']));
ginCocktails.push(new Cocktail('gin', 'Gimlet', ['2.5 oz gin', '.5 oz lime juice', '.5 oz simple syrup'], 'gimlet.jpg', 'Add all the ingredients into a shaker with ice and shake.Strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice.Garnish with a lime wheel.(You can substitute 1 oz lime cordial, such as Rose\'s Lime Juice, for both the lime juice and simple syrup)', ['lime', 'sugar']));
ginCocktails.push(new Cocktail('gin', 'Gin Fizz', ['2 oz gin', '1 oz lemon juice', '3/4 oz simple syrup'], 'gin_fizz.jpg', 'Add all the ingredients into a shaker with ice and shake.Strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice.Garnish with a lime wheel.(You can substitute 1 oz lime cordial, such as Rose\'s Lime Juice, for both the lime juice and simple syrup)', ['lemon', 'sugar']));
ginCocktails.push(new Cocktail('gin', 'Salty dog', ['1.5 oz gin', '3 oz grapefruit juice', '4tsp salt', 'sugar'], 'salty_dog.jpg', 'Rim a highball glass with salt.Shake the vodka (or gin) and grapefruit juice, pour over ice in a highball glass.Garnish with a grapefruit slice',['grapefruit juice', 'salt', 'sugar']));
ginCocktails.push(new Cocktail('gin', 'Gin Martini', ['1 oz gin', '1dry vermouth', 'olives'], 'gin_martini.jpg', 'pour over ice. stir or shake to taste', ['dry vermouth', 'olives']));
ginCocktails.push(new Cocktail('gin', 'Montmartre', ['1 1/4 oz gin', '1/2 oz sweet vermouth', '1/2 oz triple sec'], 'montmartre.jpg', 'Stir all ingredients with ice and strain into a cocktail glass. Garnish with a cherry and serve.', ['sweet vermouth', 'triple sec']));

rumCocktails.push(new Cocktail('rum', 'Mojito', ['1.5 oz rum', 'mint leaves', '3/4 oz simple syrup', '1.5 club soda'], 'mojito.jpg', 'In a shaker, lightly muddle the mint.Add the simple syrup, lime juice and rum, and fill with ice.Shake well and pour (unstrained) into a highball glass.Top with the club soda and garnish with a mint sprig',['mint', 'sugar', 'club soda']));
rumCocktails.push(new Cocktail('rum', 'Mai Tai', ['2 oz Rum', '3/4 oz lime juice', '1/4 rock candy syrup \(simple syrup with a 2 parts sugar to 1 part water ratio\)', '1/4 orgeat almond syrup', '.5 orange curacao'], 'mai_tai.jpg', 'Add all the ingredients to a shaker and fill with crushed ice.Shake vigorously until the shaker is well-chilled and frosty on the outside.Pour \(unstrained\) into a double Old Fashioned glass.Garnish with half of a juiced lime and a fresh mint sprig', ['lime', 'sugar', 'orgeat', 'orange curacao']));
rumCocktails.push(new Cocktail('rum', 'Pina Colada', ['1.5 oz Rum', '2 oz coconut milk', '2 oz pineapple juice', 'sugar'], 'pina_colada.jpg', 'To make the Piña Colada add all the ingredients to a shaker and fill with ice. Shake, and strain into a Hurricane glass filled with fresh ice.(You may also blend all the ingredients with crushed ice instead.) Garnish with a cherry and a pineapple wedge', ['coconut milk', 'pineapple juice', 'sugar']));
rumCocktails.push(new Cocktail('rum', 'Daiquiri', ['2 oz Rum', '3/4 oz lime juice,', '3/4oz demerara (turbinado) sugar syrup'],//might need to reconsider the last ingredient here
'daiquiri.jpg', 'Add all the ingredients into a shaker with ice, and shake until well-chilled.Strain into a chilled coupe.Garnish with a lime twist', ['lime', 'sugar']));
rumCocktails.push(new Cocktail('rum', 'Dark n Stormy', ['1.5 oz Rum (dark)', 'ginger beer '], 'dark_n_stormy.jpg', 'Fill a tall glass with ice, and add the rum.Top with the ginger beer.Garnish with a lime wedge', ['ginger beer']));
rumCocktails.push(new Cocktail('rum', 'Rum Punch (serves 6)', ['1.5 oz Rum(light)', '1.5 oz orange juice', '.5 oz grapefruit juice', '1 oz cranberry juice'], 'rum_punch.jpg', 'Combine all ingredients in a pitcher and stir', ['orange juice', 'grapefruit juice', 'cranberry juice']));
rumCocktails.push(new Cocktail('rum', 'Rum and coke (Cuba Libre)', ['1 oz Rum(light)', ' 3 oz coke'], 'cuba_libre.jpg', 'Pour over ice, stir and enjoy!', ['coke']));
tequilaCocktails.push(new Cocktail('tequila', 'Horny Bull', ['2 oz tequila', ' 3 Orange juice'], 'horny_bull.jpg', 'Fill tall glass with ice and pour in tequila. Stir 2-3 timesTop off with OJ and serve', ['orange juice']));
tequilaCocktails.push(new Cocktail('tequila', 'Juan Collins', ['4.5 oz tequila (Hornitos Plata Tequila recommended)', '1.5 oz lemon juice', '1 tsp. sugar', '9 oz. club soda'], 'juan_collins.jpg', 'Rim glass with salt or sugar. Fill glass with ice. Add tequila and lime juice, and stir. Top off with grapefruit juice and soda. Stir again. Garnish and serve!', ['lemon', 'sugar', 'club soda']));
tequilaCocktails.push(new Cocktail('tequila', 'Salty Chihuahua (with Lemonade)', ['1.5 oz tequila', ' 5 oz lemonade', 'splash of lime juice', 'Lime wedge, and coarse salt or sugar for garnish (optional)'], 'salty_chihuhuahu.jpg', 'Rim glass with salt or sugar. Fill glass with ice. Pour in tequila and lemonade. Squeeze and drop in lime wedge for a splash of lime juice. Stir and serve', ['lemonade', 'lime', 'salt']));
tequilaCocktails.push(new Cocktail('tequila', 'Tequila Sunrise', ['1.5 oz tequila', ' 3 oz orange juice', '1/2 oz. grenadine syrup', 'Orange Slice/Maraschino Cherry (for garnish)'], 'tequila_sunrise.jpg', 'Add ice to tall glass and pour over tequila and orange juice.Slowly add the grenadine which will sink to the bottom of the glass.Garnish with an orange slice and a maraschino cherry', ['orange juice', 'grenadine syrup']));
tequilaCocktails.push(new Cocktail('tequila', 'Tommy\'s margarita', ['2 oz tequila', ' 1 ounce lime juice \(preferably squeezed\)', '.5 oz agave syrup'], 'tommys_margarita.jpg', 'Combine all ingredients in a shaker over ice. Shake to chill Strain over fresh ice. Salt garnish \(optional\)', ['lime', 'agave syrup']));
tequilaCocktails.push(new Cocktail('Tequila', 'Tequila Negroni', ['1 oz tequila', ' 1 Campari', '1 sweet red vermouth'], 'tequila_negrroni.jpg', 'Combine all ingredients in a lowball glass with ice Stir to chill. Dilute slightly', ['campari', 'sweet vermouth']));
tequilaCocktails.push(new Cocktail('tequila', 'Tequila soda', ['2 oz tequila', ' 3 oz club soda', 'Lime wedge'], 'tequila_soda.jpg', 'Pour the tequila over ice in a tall glass.  Fill with club soda.   Squeeze in lime wedge, and enjoy', ['club soda', 'lime']));
cognacCocktails.push(new Cocktail('cognac', 'Sidecar', ['2 oz cognac', ' 1 oz lemon juice', '.5 oz simple syrup'], 'tequila_soda.jpg', 'Rim a coupe glass with sugar (or don’t… this is America, and we’re not gonna tell you what to do). Shake all ingredients with ice until chilled. Strains  Serve straight up', ['lemon', 'sugar']));

cognacCocktails.push(new Cocktail('cognac', 'Spiked Coffee', ['2 oz cognac', ' 4 ounces coffee', '1 ounce Kahlua'], 'spiked_coffee.jpg','Pour the Kahlua and Cognac into your coffee. Stir and wake up', ['coffee', 'coffee liqueur']));
cognacCocktails.push(new Cocktail('Cognac', 'Cognac Manhattan', ['2 oz cognac', ' 3/4 red vermouth', '2 dashes bitters'], 'cognac_manhattan.jpg', 'Stir all ingredients together with ice until chilled. Strain into a glass. Serve and enjoy', ['sweet vermouth', 'bitters']));
cognacCocktails.push(new Cocktail('cognac', 'Spiked cider', ['2 oz cognac', ' 4 oz apple cider', 'Orange peel'], 'spiked_cider.jpg', 'Combine the cider and Cognac over ice. Twist the orange peel to release the oils over the top of the drinks. Then sink it in', ['apple cider', 'orange']));
cognacCocktails.push(new Cocktail('cognac', 'Ode To Tiki', ['2 oz cognac', ' 1 oz orgeat', '1 oz lemon juice'], 'ode_to_tiki.jpg', 'Shake all ingredients over ice. pour into a glass.  Enjoy!', ['orgeat', 'lemon']));
cognacCocktails.push(new Cocktail('cognac', 'Brandy Alexander', ['2oz cognac', '1oz Dark creme de Cacao', '1oz Cream'], 'brandy_alexander.jpg', 'Add all the ingredients into a shaker with ice and shake. Strain into a chilled cocktail glass. Garnish with freshly grated nutmeg.', ['creme de cacao', 'heavy cream']));
cognacCocktails.push(new Cocktail('cognac', 'Brandy Crusta', ['2oz cognac', '1/4 oz triple sec', '1/2 oz fresh lemon juice', '1/2 oz simple syrup', '1tsp maraschino liqueur', '1 dash angostura bitters'], 'brandy_crusta.jpg', 'Add all ingredients to a shaker and fill with ice. Shake, and strain into a Champagne Coupe with a sugar rim and garnish with a lemon twist.', ['triple sec', 'lemon', 'sugar', 'maraschino liqueur', 'bitters']))

var allCocktails = [vodkaCocktails, rumCocktails, ginCocktails, tequilaCocktails, whiskeyCocktails, cognacCocktails];


var cocktailRecipes = {vodka: vodkaCocktails, rum: rumCocktails, gin: ginCocktails, tequila: tequilaCocktails, whiskey: whiskeyCocktails, cognac: cognacCocktails};

var allCocktailList = vodkaCocktails.concat(rumCocktails, ginCocktails, whiskeyCocktails, tequilaCocktails, cognacCocktails);
