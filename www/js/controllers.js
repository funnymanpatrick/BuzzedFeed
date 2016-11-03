angular.module('app.controllers', [])



  
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
	$scope.drink = [];

	$scope.all_drinks = d;
	$scope.all_alcohol = a;
	$scope.all_mixers = m;

	$scope.searchedDrink = '';

	$scope.faveDrink = function(){
		$scope.drink = [];
		nam = document.getElementById("favDrink").value;
		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].fav = 't';
				$scope.drink.push('You favorited ' + nam);
				return;
			}
		}
		$scope.drink.push(nam + 'not found');
	}

	$scope.unfaveDrink = function(){
		$scope.drink = [];
		nam = document.getElementById("unfavDrink").value;
		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].fav = 'f';
				$scope.drink.push('You unfavorited ' + nam);
				return;
			}
		}
		$scope.drink.push(nam + 'not found');
	}

	$scope.allFavDrink = function(){
		$scope.drink = [];
		for (i=0; i<$scope.all_drinks.length; i++){
			if(d[i].fav == 't'){
				console.log('hey this shit is true');
				$scope.drink.push(d[i].name);
			}
		}
		if ($scope.drink.length === 0) {
		$scope.drink.push('No Favorites');
		}
	}

	$scope.allDrink = function(){
		$scope.drink = [];
		for (i=0; i<$scope.all_drinks.length; i++){
			$scope.drink.push(d[i].name);
		}
		if ($scope.drink.length === 0) {
		$scope.drink.push('No Drinks');
		}
	}

	$scope.rate = function(){
		$scope.drink = [];
		nam = document.getElementById("rateDrink").value;
		rat = document.getElementById("rateScore").value;
		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == nam.toUpperCase()){
				d[i].rating = parseFloat(rat);
				$scope.drink.push('You rated ' + nam + ' a ' + parseFloat(rat));
				return;
			}
		}
		$scope.drink.push(nam + 'not found');
	}

	$scope.searchDrink = function(){
		$scope.drink = [];
		toSearch = document.getElementById("searchedDrink").value;

		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == toSearch.toUpperCase()){
				$scope.drink.push($scope.all_drinks[i].name);
				$scope.drink.push('rating: ' + $scope.all_drinks[i].rating.toString());
			}
		}

		if ($scope.drink.length === 0) {
			$scope.drink.push(toSearch + ' was not found');
		}
	};

}])
   
.controller('recommendationsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
    