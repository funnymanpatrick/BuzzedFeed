angular.module('app.controllers', [])

//need to seperate these into different controller files

  
.controller('stockCtrl', ['$scope', '$stateParams', 'GetDrinks', 'GetAlcohol', 'GetMixers',
function ($scope, $stateParams, GetDrinks, GetAlcohol, GetMixers) {
	$scope.stock = [];

	$scope.all_drinks = d;
	$scope.all_alcohol = a;
	$scope.all_mixers = m;

	$scope.searchedAlcohol = '';

	$scope.searchAlcohol = function(){
		toSearch = document.getElementById("searchedAlcohol").value;
		$scope.stock = [];
		for (i=0; i<$scope.all_alcohol.length; i++){
			if($scope.all_alcohol[i].name.toUpperCase() == toSearch.toUpperCase()){
					$scope.stock.push($scope.all_alcohol[i].name);
					$scope.stock.push('amount: ' + $scope.all_alcohol[i].ammount.toString());
				}
			}	

		for (i=0; i<$scope.all_mixers.length; i++){
			if($scope.all_mixers[i].name.toUpperCase() == toSearch.toUpperCase()){
					$scope.stock.push($scope.all_mixers[i].name);
					$scope.stock.push('amount: ' + $scope.all_mixers[i].ammount.toString());
				}
			}
		if ($scope.stock.length === 0) {
			$scope.stock.push(toSearch + ' was not found');
		}
	};

	$scope.addAlcohol = function(){
		$scope.stock = [];
		nam = document.getElementById("addedAlcohol").value;
		amm = document.getElementById("addedAAmmount").value;

		for (i=0; i<$scope.all_alcohol.length; i++){
			if($scope.all_alcohol[i].name.toUpperCase() == nam.toUpperCase()){
					a[i].ammount = parseFloat(a[i].ammount) + parseFloat(amm);
					$scope.stock.push('Added ' + amm + ' of ' + nam + ' there is now ' + a[i].ammount);
					return;
				}
			}	
		a.push({name: nam, ammount: amm});
		$scope.stock.push('Added ' + amm + ' of ' + nam);
	}

	$scope.addMixer = function(){
		$scope.stock = [];
		nam = document.getElementById("addedMixer").value;
		amm = document.getElementById("addedMAmmount").value;
		for (i=0; i<$scope.all_mixers.length; i++){
			if($scope.all_mixers[i].name.toUpperCase() == nam.toUpperCase()){
					m[i].ammount = parseFloat(m[i].ammount) + parseFloat(amm);
					$scope.stock.push('Added ' + amm + ' of ' + nam + ' there is now ' + m[i].ammount);
					return;
				}
			}	
		a.push({name: nam, ammount: amm});
		$scope.stock.push('Added ' + amm + ' of ' + nam);
	}

	$scope.removeAlcohol = function(){
		toSearch = document.getElementById("removedAlcohol").value;
		$scope.stock = [];
		for (i=0; i<$scope.all_alcohol.length; i++){
			if($scope.all_alcohol[i].name.toUpperCase() == toSearch.toUpperCase()){
					$scope.stock.push($scope.all_alcohol[i].name + ' was removed');
					a.splice(i,1);
				}
			}	

		for (i=0; i<$scope.all_mixers.length; i++){
			if($scope.all_mixers[i].name.toUpperCase() == toSearch.toUpperCase()){
					$scope.stock.push($scope.all_mixers[i].name + ' was removed');
					m.splice(i,1);
				}
			}
		if ($scope.stock.length === 0) {
			$scope.stock.push(toSearch + ' was not found');
		}
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
		document.getElementById("rate_label").style.display="none";
		document.getElementById("rate_btn").style.display="none";
		document.getElementById("favorite_btn").style.display="none";
		document.getElementById("unfavorite_btn").style.display="none";
		document.getElementById("details_btn").style.display="none";
		$scope.drink_list = [];
		$scope.ingredients = [];
	}

	$scope.showDisplay = function(){
		document.getElementById("rate_label").style.display="block";
		document.getElementById("rate_btn").style.display="inline";
		document.getElementById("favorite_btn").style.display="inline";
		document.getElementById("unfavorite_btn").style.display="inline";
		document.getElementById("details_btn").style.display="inline";
		$scope.drink_list = [];
		$scope.ingredients = [];
	}

	$scope.faveDrink = function(){
		// $scope.drink = [];
		// nam = document.getElementById("favDrink").value;

		nam = $scope.searchedDrink;
		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].fav = 't';
				//$scope.drink.push('You favorited ' + nam);
				$scope.favorited = 'T';
				return;
			}
		}
		// $scope.drink.push(nam + ' not found');
	}

	$scope.unfaveDrink = function(){
		// $scope.drink = [];
		// nam = document.getElementById("unfavDrink").value;
		nam = $scope.searchedDrink;
		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].fav = 'f';
				//$scope.drink.push('You unfavorited ' + nam);
				$scope.favorited = 'F';
				return;
			}
		}
		// $scope.drink.push(nam + 'not found');
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

	$scope.rate = function(){
		// $scope.drink = [];
		// nam = document.getElementById("rateDrink").value;
		nam = $scope.searchedDrink;
		rat = document.getElementById("rateScore").value;

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
    