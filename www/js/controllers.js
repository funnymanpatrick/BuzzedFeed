angular.module('app.controllers', [])
//FIXME: seperate controllers into seperate files

// This controller works on the 'Stock' tab. It gets all drinks, alcohol and mixers,
// and acts as an intermediary between the user ingredient inputs and the database.
.controller('stockCtrl', ['$scope', '$stateParams', 'GetDrinks', 'GetAlcohol', 'GetMixers',
function ($scope, $stateParams, GetDrinks, GetAlcohol, GetMixers) {
	// Gets all drinks, alcohol and mixers
  $scope.all_drinks = d;
	$scope.all_alcohol = a;
	$scope.all_mixers = m;

  // Pulls in database from a json file
	var xmlhttp = new XMLHttpRequest();
  var url = "data.json";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        consol.log(myArr);
        d = myArr.d;
        a = myArr.a;
        m = myArr.m;
        console.log("Loaded Database");
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  // Stores the current ingredient that the user has searched for
	$scope.currentIngredient = {};

  // Hides all display elements
	$scope.hideDisplay = function(){
		document.getElementById("ingredient_label").style.display="none";
		document.getElementById("set_ingredient_block").style.display="none";
		document.getElementById("all_ingredients").style.display="none";
		document.getElementById("my_stock").style.display="none";
	}

  // Shows display elements after a user has succesfully searched for an ingredient
	$scope.showDisplay = function(){
		document.getElementById("ingredient_label").style.display="block";
		document.getElementById("set_ingredient_block").style.display="block";
	}

  // Displays the users personal stock
  // Activated on 'My Stock' button press
	$scope.getStock = function(){
		$scope.hideDisplay();
    // Simply sets the 'my_stock' element to be displayed. All searching
    // through user data is handled by Angular directives in the template
		document.getElementById("my_stock").style.display="block";
	}

  // Displays all possible ingredients
  // Activated on 'List All Ingredients' button press
	$scope.listAllIngredients = function(){
		$scope.hideDisplay();
		document.getElementById("all_ingredients").style.display="block";
	}

  // Takes the test from the search bar and attempts to find the searched ingredient
  // Activated on 'Search' button press
	$scope.searchIngredient = function(){
		$scope.hideDisplay();
		toSearch = document.getElementById('searchedIngredient').value;
    // Searches through all alcohol in the database
    // If found, updates and shows the display elements
		for (i=0; i<$scope.all_alcohol.length; i++){
			if($scope.all_alcohol[i].name.toUpperCase() == toSearch.toUpperCase()){
				$scope.currentIngredient = $scope.all_alcohol[i];
				$scope.showDisplay();
				return;
			}
		}	

    // Searches through all mixers in the database
    // If found, updates and shows the display elements
		for (i=0; i<$scope.all_mixers.length; i++){
			if($scope.all_mixers[i].name.toUpperCase() == toSearch.toUpperCase()){
				$scope.currentIngredient = $scope.all_mixers[i];
				$scope.showDisplay();
				return;
			}
		}

    // If user input did not match anything in database, displays 'Not Found'
		$scope.currentIngredient = {name: 'Not Found', ammount: 'N/A'};
		$scope.showDisplay();
	};

  // Sets the currently entered amount for the currently searched ingredient
  // Activated on 'Set' button press
	$scope.setIngredient = function(){
		amm = document.getElementById("setIngredient").value;
		$scope.currentIngredient.ammount = amm;
	}

  // Removes the currently searched ingredient from the user stock
  // Activated on 'Finished!' button press
	$scope.removeIngredient = function(){
		$scope.currentIngredient.ammount = 0;
	}

}])

// This controller works on the 'Drinks' tab. It gets all drinks, alcohol and mixers,
// and acts as an intermediary between the user drinks inputs and the database.
.controller('drinksCtrl', ['$scope', '$stateParams', 'GetDrinks', 'GetAlcohol', 'GetMixers',
function ($scope, $stateParams, GetDrinks, GetAlcohol, GetMixers) {
	// Text to be read by Angular
	$scope.drink = '';
	$scope.rating = '';
	$scope.favorited = '';

  // Text displayed on 'List all Drinks' or 'List Favorited Drinks'
	$scope.drink_list = [];

  // All drinks, alcohol and mixers in database
	$scope.all_drinks = d;
	$scope.all_alcohol = a;
	$scope.all_mixers = m;

  // The name of the currently searched drink
	$scope.searchedDrink = '';

  // List of ingredients to be displayed
	$scope.ingredients = [];

  // Hides the display elements
	$scope.hideDisplay = function(){
		document.getElementById("rate_btn").style.display="none";
		document.getElementById("favorite_btn").style.display="none";
		document.getElementById("unfavorite_btn").style.display="none";
		document.getElementById("details_btn").style.display="none";
		document.getElementById("drink_label").style.display="none";
		document.getElementById("favorite_label").style.display="none";
		$scope.drink_list = [];
		$scope.ingredients = [];
	}

  // Shows the display elements
	$scope.showDisplay = function(){
		document.getElementById("rate_btn").style.display="block";
		if($scope.favorited=='F'){
			document.getElementById("favorite_btn").style.display="block";
		}
		else{
			document.getElementById("unfavorite_btn").style.display="block";
		}
		document.getElementById("details_btn").style.display="block";
		document.getElementById("drink_label").style.display="inline";
		document.getElementById("favorite_label").style.display="block";
		$scope.drink_list = [];
		$scope.ingredients = [];
	}

  // Favorites the currently searched drink for the user in the database
  // Activated on 'Favorite' button press
  // Button will only ever be visible if drink is currently unfavorited
	$scope.faveDrink = function(){
		nam = $scope.searchedDrink;
		for (i=0; i<$scope.all_drinks.length; i++){
      // Finds the drink
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].fav = 't';
				$scope.favorited = 'T';
        // Changes 'Favorite' button to 'Unfavorite'
				document.getElementById("favorite_btn").style.display="none";
				document.getElementById("unfavorite_btn").style.display="block";
				return;
			}
		}
	}

  // Unfavorites the currently searched drink for the user in the database
  // Activated on 'Unfavorite' button press
  // Button will only ever be visible if drink is currently favorited
	$scope.unfaveDrink = function(){
		nam = $scope.searchedDrink;
		for (i=0; i<$scope.all_drinks.length; i++){
      //Finds the drink
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].fav = 'f';
				$scope.favorited = 'F';
        // Changes 'Unfavorite' button to 'Favorite'
				document.getElementById("favorite_btn").style.display="block";
				document.getElementById("unfavorite_btn").style.display="none";
				return;
			}
		}
	}

  // Displays all favorited drinks
  // Activated on 'Show Favorites' button press
	$scope.allFavDrink = function(){
		$scope.hideDisplay();
    // Goes through the drinks database and gets all the favorited ones
		for (i=0; i<$scope.all_drinks.length; i++){
			if(d[i].fav == 't'){
				console.log('hey this shit is true');
				$scope.drink_list.push(d[i].name);
			}
		}
    // Displays 'No Favorites' if none exist
		if ($scope.drink_list.length === 0) {
			$scope.drink_list.push('No Favorites');
		}
	}

  // Displays all possible drinks
  // Activated on 'Show All' button press
	$scope.allDrink = function(){
		$scope.hideDisplay();
		for (i=0; i<$scope.all_drinks.length; i++){
			$scope.drink_list.push(d[i].name);
		}
		if ($scope.drink.length === 0) {
			$scope.drink_list.push('No Drinks');
		}
	}

  // Rates the currently selected drink based on user input
  // Parameter: rat is the rating selected by the user, defined by an
  // an Angular directive in the template
  // Activated on any star button press
	$scope.rate = function(rat){
		nam = $scope.searchedDrink;

		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].rating = parseFloat(rat);
				$scope.rating = parseFloat(rat);
				return;
			}
		}
	}

  // Searches for a specific drink based on user input in the search bar
  // Activated on 'Search' button press
	$scope.searchDrink = function(){
		toSearch = document.getElementById("searchedDrink").value;

		$scope.searchedDrink = toSearch;

    // Goes through all drinks and looks for the user input 
		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == toSearch.toUpperCase()){
        // Sets display variables 
				$scope.drink = $scope.all_drinks[i].name;
				$scope.rating = $scope.all_drinks[i].rating.toString();
				$scope.favorited = $scope.all_drinks[i].fav.toString().toUpperCase();
			}
		}

    // If not found, displays 'Unknown'
		if ($scope.drink.length === 0) {
			$scope.drink = 'Unknown';
			$scope.rating = ''; //FIXME: currently doesn't display?
			$scope.favorited = '';
			$scope.hideDisplay()
		}
		else {
			$scope.showDisplay();
		}
	};

  // Gets and displays ingredients for currently searched drink
  // Activated on 'Ingredients' button press
	$scope.getIngredients = function(){
		$scope.ingredients = [];

    // Finds the currently selected drink
		for(i=0; i<$scope.all_drinks.length; i++){
			current = $scope.all_drinks[i];
			if(current.name.toUpperCase() == $scope.searchedDrink.toUpperCase()){
        // Once found, gets all alcohol ingredients of that drink and amount owned by user
				for(j=0; j<current.alcohol.length; j++){
					to_add = {name: current.alcohol[j]};

					for(k=0; k<$scope.all_alcohol.length; k++){
						if(current.alcohol[j]==$scope.all_alcohol[k].name){
							to_add.owns = $scope.all_alcohol[k].ammount;
						}
					}
					$scope.ingredients.push(to_add);
				}
        // Next, gets all mixer ingredients and amount owned by user
				for(j=0; j<current.mixers.length; j++){
					to_add = {name: current.mixers[j]};

					for(k=0; k<$scope.all_mixers.length; k++){
						if(current.mixers[j]==$scope.all_mixers[k].name){
							to_add.owns = $scope.all_mixers[k].ammount;
						}
					}

					$scope.ingredients.push(to_add);
				}
			}
		}
	}

}])


// This controller works on the 'Recommendations' tab.
// It takes as user input and calls the Backend service where the recommendation
// algorithm is running.
.controller('recommendationsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
	$scope.recommendations = [];

	$scope.give_recommendations = function(){
		$scope.recommendations.push('Bloody Mary');
		$scope.recommendations.push('Gin and Tonic');
    // FIXME: Currently interaction between controller and Backend does not work
	}

}])

// This controller works on the 'Login' tab.
// It takes user input and checks against cred data
.controller('loginCtrl', ['$scope', '$stateParams', '$state',
 function ($scope, $stateParams, $state) {
  // Gets user input into Username and Password fields and checks against cred data
  // If succesful, takes User to stock tab
  // If unsuccessful, displays 'Login Failed'
  // Activated on 'Login' button press
 	$scope.login = function(){
 		let auth = false;
		let usr = document.getElementById("userr").value;
		let pas = document.getElementById("passs").value;
 		if (usr.toUpperCase() == user.toUpperCase() && md5(pas) == pass) auth = true;
 		if (auth) $state.go('tabsController.stock');
 		else console.log("Login Failed");
 	}
 
  // Takes user to register page
  // Activate on 'Or create an account' button press
 	$scope.register = function(){
     	$state.go('registerSurvey');
 	}
 }])
 
// This controller works on the 'Register' tab
// It allows the user to register a new username/password combination
.controller('registerSurveyCtrl', ['$scope', '$stateParams', '$state',
	function ($scope, $stateParams, $state) {
    // If username/password specifications are not met, 'Registration Failed' is displayed
    // Otherwise a new user is added and the user is taken to the Stock tab
 		$scope.register = function(){
 		let auth = false;
 		let usr = document.getElementById("userrr").value;
 		let pas = document.getElementById("passss").value;
 		if (usr != "" && pas != "") auth = true;
     	if (auth) $state.go('tabsController.stock');
     	else console.log("Registration Failed");
 		}
 }])
    
