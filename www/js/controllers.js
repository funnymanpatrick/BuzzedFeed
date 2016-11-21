angular.module('app.controllers', [])

//need to seperate these into different controller files

  
.controller('stockCtrl', ['$scope', '$stateParams', 'GetDrinks', 'GetAlcohol', 'GetMixers',
function ($scope, $stateParams, GetDrinks, GetAlcohol, GetMixers) {
	$scope.all_drinks = d;
	$scope.all_alcohol = a;
	$scope.all_mixers = m;

	$scope.currentIngredient = {};

	$scope.hideDisplay = function(){
		document.getElementById("ingredient_label").style.display="none";
		document.getElementById("set_ingredient_block").style.display="none";
		document.getElementById("all_ingredients").style.display="none";
		document.getElementById("my_stock").style.display="none";
	}

	$scope.showDisplay = function(){
		document.getElementById("ingredient_label").style.display="block";
		document.getElementById("set_ingredient_block").style.display="block";
	}

	$scope.getStock = function(){
		$scope.hideDisplay();
		document.getElementById("my_stock").style.display="block";
	}

	$scope.listAllIngredients = function(){
		$scope.hideDisplay();
		document.getElementById("all_ingredients").style.display="block";
	}

	$scope.searchIngredient = function(){
		$scope.hideDisplay();
		toSearch = document.getElementById('searchedIngredient').value;
		for (i=0; i<$scope.all_alcohol.length; i++){
			if($scope.all_alcohol[i].name.toUpperCase() == toSearch.toUpperCase()){
				$scope.currentIngredient = $scope.all_alcohol[i];
				$scope.showDisplay();
				return;
			}
		}	

		for (i=0; i<$scope.all_mixers.length; i++){
			if($scope.all_mixers[i].name.toUpperCase() == toSearch.toUpperCase()){
				$scope.currentIngredient = $scope.all_mixers[i];
				$scope.showDisplay();
				return;
			}
		}

		$scope.currentIngredient = {name: 'Not Found', ammount: 'N/A'};
		$scope.showDisplay();
	};

	$scope.setIngredient = function(){
		amm = document.getElementById("setIngredient").value;

		$scope.currentIngredient.ammount = amm;
	}

	$scope.removeIngredient = function(){
		$scope.currentIngredient.ammount = 0;
	}

}])
   
.controller('drinksCtrl', ['$scope', '$stateParams', 'GetDrinks', 'GetAlcohol', 'GetMixers',
function ($scope, $stateParams, GetDrinks, GetAlcohol, GetMixers) {
	//Text to be read by Angular
	$scope.drink = '';
	$scope.rating = '';
	$scope.favorited = '';

	$scope.drink_list = [];

	$scope.all_drinks = d;
	$scope.all_alcohol = a;
	$scope.all_mixers = m;

	$scope.searchedDrink = '';

	$scope.ingredients = [];

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

	$scope.faveDrink = function(){
		nam = $scope.searchedDrink;
		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].fav = 't';
				$scope.favorited = 'T';
				document.getElementById("favorite_btn").style.display="none";
				document.getElementById("unfavorite_btn").style.display="block";
				return;
			}
		}
	}

	$scope.unfaveDrink = function(){
		nam = $scope.searchedDrink;
		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].fav = 'f';
				$scope.favorited = 'F';
				document.getElementById("favorite_btn").style.display="block";
				document.getElementById("unfavorite_btn").style.display="none";
				return;
			}
		}
	}

	$scope.allFavDrink = function(){
		$scope.hideDisplay();
		for (i=0; i<$scope.all_drinks.length; i++){
			if(d[i].fav == 't'){
				console.log('hey this shit is true');
				$scope.drink_list.push(d[i].name);
			}
		}
		if ($scope.drink_list.length === 0) {
			$scope.drink_list.push('No Favorites');
		}
	}

	$scope.allDrink = function(){
		$scope.hideDisplay();
		for (i=0; i<$scope.all_drinks.length; i++){
			$scope.drink_list.push(d[i].name);
		}
		if ($scope.drink.length === 0) {
			$scope.drink_list.push('No Drinks');
		}
	}

	$scope.rate = function(rat){
		// $scope.drink = [];
		// nam = document.getElementById("rateDrink").value;
		nam = $scope.searchedDrink;
		// rat = document.getElementById("rateScore").value;

		console.log(name, rat);

		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].rating = parseFloat(rat);
				$scope.rating = parseFloat(rat);
				// $scope.drink.push('You rated ' + nam + ' a ' + parseFloat(rat));
				return;
			}
		}
		// $scope.drink.push(nam + 'not found');
	}

	$scope.searchDrink = function(){
		toSearch = document.getElementById("searchedDrink").value;

		$scope.searchedDrink = toSearch;

		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == toSearch.toUpperCase()){
				// $scope.drink.push($scope.all_drinks[i].name);
				// $scope.drink.push('Rating: ' + $scope.all_drinks[i].rating.toString());
				// $scope.drink.push('Favorited: ' + $scope.all_drinks[i].fav.toString().toUpperCase()); 
				$scope.drink = $scope.all_drinks[i].name;
				$scope.rating = $scope.all_drinks[i].rating.toString();
				$scope.favorited = $scope.all_drinks[i].fav.toString().toUpperCase();
			}
		}

		if ($scope.drink.length === 0) {
			// $scope.drink.push(toSearch + ' was not found');
			$scope.drink = 'Unknown';
			$scope.rating = '';
			$scope.favorited = '';
			$scope.hideDisplay()
		}
		else {
			$scope.showDisplay();
		}
	};

	$scope.getIngredients = function(){
		$scope.ingredients = [];

		for(i=0; i<$scope.all_drinks.length; i++){
			current = $scope.all_drinks[i];
			if(current.name.toUpperCase() == $scope.searchedDrink.toUpperCase()){
				for(j=0; j<current.alcohol.length; j++){
					to_add = {name: current.alcohol[j]};

					for(k=0; k<$scope.all_alcohol.length; k++){
						if(current.alcohol[j]==$scope.all_alcohol[k].name){
							to_add.owns = $scope.all_alcohol[k].ammount;
						}
					}

					$scope.ingredients.push(to_add);
				}
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
   
.controller('recommendationsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$state',
 function ($scope, $stateParams, $state) {
 	$scope.login = function(){
 		let auth = false;
		let usr = document.getElementById("userr").value;
		let pas = document.getElementById("passs").value;
 		if (usr.toUpperCase() == user.toUpperCase() && md5(pas) == pass) auth = true;
 		if (auth) $state.go('tabsController.stock');
 		else console.log("Login Failed");
 	}
 
 	$scope.register = function(){
     	$state.go('registerSurvey');
 	}
 
 
 }])
 
.controller('registerSurveyCtrl', ['$scope', '$stateParams', '$state',
	function ($scope, $stateParams, $state) {
 		$scope.register = function(){
 		let auth = false;
 		let usr = document.getElementById("userrr").value;
 		let pas = document.getElementById("passss").value;
 		if (usr != "" && pas != "") auth = true;
     	if (auth) $state.go('tabsController.stock');
     	else console.log("Registration Failed");
 		}
 }])
    