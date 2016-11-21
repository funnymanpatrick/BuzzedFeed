var d = [
			{name: 'Gin and Tonic', alcohol: ['Gin'], mixers: ['Tonic'], rating: 5.0, fav: 't'},
			{name: 'Dark and Stormy', alcohol: ['Rum'], mixers: ['Ginger Beer'], rating: 5.0, fav: 'f'},
			{name: 'Rum and Coke', alcohol: ['Rum'], mixers: ['Cola'], rating: 5.0, fav: 'f'},
			{name: 'Bloody Mary', alcohol: ['Vodka'], mixers: ['Tomato Juice'], rating: 5.0, fav: 'f'},
			{name: 'Moscow Mule', alcohol: ['Vodka'], mixers: ['Ginger Beer', 'Lime Juice'], rating: 5.0, fav: 'f'},
			{name: 'Screwdriver', alcohol: ['Vodka'], mixers: ['Orange Juice'], rating: 4.1, fav: 'f'},
			{name: 'Long Island Iced Tea', alcohol: ['Gin', 'Tequila', 'Vodka', 'Rum'], mixers: ['Lemon Juice'], rating: 5.0, fav: 't'}
      {name: 'Woo Woo', alcohol: ['Peach Schnapps','Vodka'], mixers: ['Cranberry Juice'], rating: 5.0, fav: 'f'},
      {name: 'Sex on the Beach', alcohol: ['Peach Schnapps','Vodka'], mixers: ['Cranberry Juice;Grapefruit Juice'], rating: 5.0, fav: 'f'},
      {name: 'Miami Vice', alcohol: ['Rum'], mixers: ['Pina Colada Mix', 'Daquiri Mix'], rating: 5.0, fav: 'f'},
      {name: 'Sperm', alcohol: ['Tequila', 'Vodka'], mixers: ['Cream'], rating: 5.0, fav: 'f'},
      {name: 'Blue Lagoon', alcohol: ['Blue Curacao Liqueur', 'Vodka'], mixers: ['Lemonade'], rating: 5.0, fav: 'f'},
      {name: 'Blow Job', alcohol: ['Coffee Liqueur', 'Irish Cream'], mixers: ['Whipped Cream'], rating: 5.0, fav: 'f'},
      {name: 'Jungle Juice', alcohol: ['Everclear', 'Vodka'], mixers: ['Fruit Punch', 'Lemonade', 'Orange Juice'], rating: 5.0, fav: 'f'},
      {name: 'Dirty Shirley', alcohol: ['Vodka'], mixers: ['Grenadine', 'Sprite'], rating: 5.0, fav: 'f'},
      {name: 'Hurricane', alcohol: ['Amaretto', 'Gin', 'Rum', 'Vodka'], mixers: ['Grapefruit Juice', 'Grenadine', 'Orange Juice'], rating: 5.0, fav: 'f'},
      {name: 'Tequila Sunrise', alcohol: ['Tequila'], mixers: ['Grenadine', 'Orange Juice'], rating: 5.0, fav: 'f'},
      {name: 'Mojito', alcohol: ['Rum'], mixers: ['Club Soda', 'Lemon Juice', 'Mint'], rating: 5.0, fav: 'f'},
      {name: 'Royal Flush', alcohol: ['Peach Schnapps', 'Whiskey'], mixers: ['Cranberry Juice', 'Raspberry Liqueur'], rating: 5.0, fav: 'f'},
      {name: 'Dirty Girl Scout', alcohol: ['Coffee Liqueur', 'Creme de Menthe', 'Irish Cream', 'Vodka'], mixers: ['Whipped Cream'], rating: 5.0, fav: 'f'},
      {name: 'White Russian', alcohol: ['Coffee Liqueur', 'Vodka'], mixers: ['Cream'], rating: 5.0, fav: 'f'},
      {name: 'Seabreeze', alcohol: ['Vodka'], mixers: ['Cranberry Juice', 'Grapefruit Juice'], rating: 5.0, fav: 'f'},
      {name: 'Margarita', alcohol: ['Tequila', 'Orange Liqueur'], mixers: ['Lime Juice'], rating: 5.0, fav: 'f'},
      {name: 'Pina Colada', alcohol: ['Rum'], mixers: ['Coconut Milk', 'Pineapple Juice'], rating: 5.0, fav: 'f'},
      {name: 'Whiskey Sour', alcohol: ['Whiskey'], mixers: ['Sweet and Sour Mix'], rating: 5.0, fav: 'f'},
      {name: 'Old Fashioned', alcohol: ['Whiskey'], mixers: ['Bitters', 'Sugar'], rating: 5.0, fav: 'f'},
      {name: 'Tom Collins', alcohol: ['Gin'], mixers: ['Lemon Juice', 'Soda Water', 'Sugar'], rating: 5.0, fav: 'f'},
      {name: 'Daquiri', alcohol: ['Rum'], mixers: ['Lime Juice', 'Simple Syrup'], rating: 5.0, fav: 'f'},
      {name: 'Cosmopolitan', alcohol: ['Vodka', 'Orange Liqueur'], mixers: ['Cranberry Juice', 'Lime Juice'], rating: 5.0, fav: 'f'},
      {name: 'Mad Hatter', alcohol: ['Peach Schnapps', 'Vodka'], mixers: ['Cola', 'Lemonade'], rating: 5.0, fav: 'f'},
      {name: 'Alabama Slammer', alcohol: ['Amaretto', 'Gin', 'Peach Liqueur'], mixers: ['Orange Juice', 'Sweet and Sour Mix'], rating: 5.0, fav: 'f'},
      {name: 'Jagar Bomb', alcohol: ['Herbal Liqueur'], mixers: ['Energy Drink'], rating: 5.0, fav: 'f'},
      {name: 'Trashcan', alcohol: ['Gin', 'Blue Curacao Liqueur', 'Rum', 'Triple Sec', 'Vodka'], mixers: ['Energy Drink'], rating: 5.0, fav: 'f'},
      {name: 'Zombie', alcohol: ['Brandy', 'Rum'], mixers: ['Apple Juice', 'Lime Juice', 'Orange Juice'], rating: 5.0, fav: 'f'},
      {name: 'Mojo', alcohol: ['Brandy', 'Rum'], mixers: ['Apple Juice', 'Beer', 'Club Soda'], rating: 5.0, fav: 'f'},
      {name: 'Ice Pick', alcohol: ['Vodka'], mixers: ['Iced Tea', 'Lemon Juice'], rating: 5.0, fav: 'f'},
      {name: 'Mudslide', alcohol: ['Coffee Liqueur', 'Irish Cream', 'Vodka'], mixers: ['Chocolate Syrup', 'Cream'], rating: 5.0, fav: 'f'},
      {name: 'Vodka Martini', alcohol: ['Vodka'], mixers: ['Vermouth'], rating: 5.0, fav: 'f'},
      {name: 'Highball', alcohol: ['Scotch'], mixers: ['Club Soda'], rating: 5.0, fav: 'f'},
      {name: 'Manhatten', alcohol: ['Whiskey'], mixers: ['Bitters', 'Vermouth'], rating: 5.0, fav: 'f'},
      {name: 'Sidecar', alcohol: ['Cognac', 'Triple Sec'], mixers: ['Lemon Juice'], rating: 5.0, fav: 'f'},
      {name: 'Irish Coffee', alcohol: ['Irish Cream', 'Whiskey'], mixers: ['Coffee', 'Cream'], rating: 5.0, fav: 'f'},
      {name: 'Negroni', alcohol: ['Campari', 'Gin'], mixers: ['Vermouth'], rating: 5.0, fav: 'f'},
      {name: 'Vodka Cranberry', alcohol: ['Vodka'], mixers: ['Cranberry Juice'], rating: 5.0, fav: 'f'},
      {name: 'Mint Julep', alcohol: ['Whiskey'], mixers: ['Club Soda', 'Mint', 'Sugar'], rating: 5.0, fav: 'f'},
      {name: 'Mai Tai', alcohol: ['Blue Curacao Liqueur', 'Rum'], mixers: ['Lime Juice', 'Simple Syrup'], rating: 5.0, fav: 'f'},
      {name: 'Planter\'s Punch', alcohol: ['Rum'], mixers: ['Grenadine', 'Lime Juice', 'Lemon Juice', 'Simple Syrup'], rating: 5.0, fav: 'f'},
      {name: 'Boston Tea Party', alcohol: ['Amaretto', 'Coffee Liqueur', 'Gin', 'Orange Liqueur', 'Rum', 'Vodka'], mixers: ['Cola', 'Sweet and Sour Mix'], rating: 5.0, fav: 'f'},
      {name: 'Blue Diablo', alcohol: ['Blue Curacoa Liqueur', 'Tequila'], mixers: ['Lemon Juice', 'Lime Juice'], rating: 5.0, fav: 'f'},
    ];

var a = [
			{name: 'Vodka', ammount: 5},
			{name: 'Rum', ammount: 2},
			{name: 'Gin', ammount: 1},
			{name: 'Tequila', ammount: 7},
			{name: 'Whiskey', ammount: 0}
      {name: 'Blue Curacoa Liqueur', ammount: 1},
      {name: 'Coffee Liqueur', ammount: 1},
      {name: 'Irish Cream', ammount: 1},
      {name: 'Orange Liqueur', ammount: 1},
      {name: 'Peach Schnapps', ammount: 1},
      {name: 'Brandy', ammount: 1},
      {name: 'Triple Sec', ammount: 1},
      {name: 'Campari', ammount: 1},
      {name: 'Scotch', ammount: 1},
      {name: 'Cognac', ammount: 1},
      {name: 'Amaretto', ammount: 1},
      {name: 'Peach Liqueur', ammount: 1},
      {name: 'Creme de Menthe', ammount: 1},
      {name: 'Everclear', ammount: 1},
      {name: 'Herbal Liqueur', ammount: 1},
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
      {name: 'Lemonade', ammount: 1}
      {name: 'Sugar', ammount: 1}
      {name: 'Beer', ammount: 1}
      {name: 'Vermouth', ammount: 1}
      {name: 'Grenadine', ammount: 1}
      {name: 'Apple Juice', ammount: 1}
      {name: 'Cranberry Juice', ammount: 1}
      {name: 'Sweet and Sour Mix', ammount: 1}
      {name: 'Coffee', ammount: 1}
      {name: 'Cream', ammount: 1}
      {name: 'Simple Syrup', ammount: 1}
      {name: 'Bitters', ammount: 1}
      {name: 'Energy Drink', ammount: 1}
      {name: 'Mint', ammount: 1}
      {name: 'Chocolate Syrup', ammount: 1}
      {name: 'Club Soda', ammount: 1}
      {name: 'Soda Water', ammount: 1}
      {name: 'Coconut Milk', ammount: 1}
      {name: 'Pineapple Juice', ammount: 1}
      {name: 'Salt', ammount: 1}
      {name: 'Grapefruit Juice', ammount: 1}
      {name: 'Whipped Cream', ammount: 1}
      {name: 'Sprite', ammount: 1}
      {name: 'Fruit Punch', ammount: 1}
      {name: 'Salt', ammount: 1}
      {name: 'Raspberry Liqueur', ammount: 1}
      {name: 'Pina Colada Mix', ammount: 1}
      {name: 'Daquiri Mix', ammount: 1}
      {name: 'Salt', ammount: 1}
		];
