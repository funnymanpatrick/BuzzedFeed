angular.module('app.controllers', [])
  
.controller('stockCtrl', ['$scope', '$stateParams', 'GetDrinks', 'GetAlcohol', 'GetMixers',
function ($scope, $stateParams, GetDrinks, GetAlcohol, GetMixers) {
	$scope.stock = [];

	$scope.all_drinks = GetDrinks.drinks;
	$scope.all_alcohol = GetAlcohol.alcohol;
	$scope.all_mixers = GetMixers.mixers;

	$scope.searchedAlcohol = '';

	$scope.searchAlcohol = function(){
		toSearch = document.getElementById("searchedAlcohol").value;

		for (i=0; i<$scope.all_alcohol.length; i++){
			if($scope.all_alcohol[i].name.toUpperCase() == toSearch.toUpperCase()){
					console.log($scope.all_alcohol[i].ammount);
					$scope.stock.push($scope.all_alcohol[i].name);
					$scope.stock.push($scope.all_alcohol[i].ammount.toString());
				}
			}	

		for (i=0; i<$scope.all_mixers.length; i++){
			if($scope.all_mixers[i].name.toUpperCase() == toSearch.toUpperCase()){
					$scope.stock.push($scope.all_mixers[i].name);
					$scope.stock.push($scope.all_mixers[i].ammount.toString());
				}
			}
	};

}])
   
.controller('drinksCtrl', ['$scope', '$stateParams', 'GetDrinks', 'GetAlcohol', 'GetMixers',
function ($scope, $stateParams, GetDrinks, GetAlcohol, GetMixers) {
	$scope.drink = [];

	$scope.all_drinks = GetDrinks.drinks;
	$scope.all_alcohol = GetAlcohol.alcohol;
	$scope.all_mixers = GetMixers.mixers;

	$scope.searchedDrink = '';

	$scope.searchDrink = function(){
		toSearch = document.getElementById("searchedDrink").value;

		for (i=0; i<$scope.all_drinks.length; i++){
			if($scope.all_drinks[i].name.toUpperCase() == toSearch.toUpperCase()){
				$scope.drink.push($scope.all_drinks[i].name);
				$scope.drink.push($scope.all_drinks[i].rating.toString());
			}
		}
	};

}])
   
.controller('recommendationsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
    