var d = [
			{name: 'Gin and Tonic', alcohol: ['Gin'], mixers: ['Tonic'], rating: 5.0},
			{name: 'Dark and Stormy', alcohol: ['Rum'], mixers: ['Ginger Beer'], rating: 5.0},
			{name: 'Rum and Coke', alcohol: ['Rum'], mixers: ['Cola'], rating: 5.0},
			{name: 'Bloody Mary', alcohol: ['Vodka'], mixers: ['Tomato Juice'], rating: 5.0},
			{name: 'Moscow Mule', alcohol: ['Vodka'], mixers: ['Ginger Beer', 'Lime Juice'], rating: 5.0},
			{name: 'Screwdriver', alcohol: ['Vodka'], mixers: ['Orange Juice'], rating: 4.1},
			{name: 'Long Island Iced Tea', alcohol: ['Gin', 'Tequila', 'Vodka', 'Rum'], mixers: ['Lemon Juice'], rating: 5.0}
		];

var a = [
			{name: 'Vodka', ammount: 5},
			{name: 'Rum', ammount: 2},
			{name: 'Gin', ammount: 1},
			{name: 'Tequila', ammount: 7},
			{name: 'Whiskey', ammount: 0}
		];

var m = [
			{name: 'Tonic Water', ammount: 4},
			{name: 'Ginger Beer', ammount: 5},
			{name: 'Cola', ammount: 5},
			{name: 'Tomato Juice', ammount: 5},
			{name: 'Orange Juice', ammount: 5},
			{name: 'Red Bull', ammount: 5},
			{name: 'Lemon Juice', ammount: 5},
			{name: 'Lime Juice', ammount: 5}
		];

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
					$scope.stock.push('ammount: ' + $scope.all_alcohol[i].ammount.toString());
				}
			}	

		for (i=0; i<$scope.all_mixers.length; i++){
			if($scope.all_mixers[i].name.toUpperCase() == toSearch.toUpperCase()){
					$scope.stock.push($scope.all_mixers[i].name);
					$scope.stock.push('ammount: ' + $scope.all_mixers[i].ammount.toString());
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
    