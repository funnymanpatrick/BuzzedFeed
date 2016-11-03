angular.module('app.services', [])


//TODO: Have ids for each so not keying by name
//Hashmap?


.factory('GetDrinks', [function() {
	return {
		drinks: [
			{name: 'Gin and Tonic', alcohol: ['Gin'], mixers: ['Tonic'], rating: 5.0},
			{name: 'Dark and Stormy', alcohol: ['Rum'], mixers: ['Ginger Beer'], rating: 5.0},
			{name: 'Rum and Coke', alcohol: ['Rum'], mixers: ['Cola'], rating: 5.0},
			{name: 'Bloody Mary', alcohol: ['Vodka'], mixers: ['Tomato Juice'], rating: 5.0},
			{name: 'Moscow Mule', alcohol: ['Vodka'], mixers: ['Ginger Beer', 'Lime Juice'], rating: 5.0},
			{name: 'Screwdriver', alcohol: ['Vodka'], mixers: ['Orange Juice'], rating: 4.1},
			{name: 'Long Island Iced Tea', alcohol: ['Gin', 'Tequila', 'Vodka', 'Rum'], mixers: ['Lemon Juice'], rating: 5.0}
		]
	};
}])

.factory('GetAlcohol', [function(){
	return {
		alcohol: [
			{name: 'Vodka', ammount: 5},
			{name: 'Rum', ammount: 2},
			{name: 'Gin', ammount: 1},
			{name: 'Tequila', ammount: 7},
			{name: 'Whiskey', ammount: 0}
		]
	}
}])

.factory('GetMixers', [function(){
	return {
		mixers: [
			{name: 'Tonic Water', ammount: 5},
			{name: 'Ginger Beer', ammount: 5},
			{name: 'Cola', ammount: 5},
			{name: 'Tomato Juice', ammount: 5},
			{name: 'Orange Juice', ammount: 5},
			{name: 'Red Bull', ammount: 5},
			{name: 'Lemon Juice', ammount: 5},
			{name: 'Lime Juice', ammount: 5}
		]
	}
}]);