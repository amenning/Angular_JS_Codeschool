(function(){
	var app = angular.module('store', ['store-products']);
	
 	app.controller('StoreController', function(){
		this.products = gem;
	}); 
	
/* 	app.controller('StoreController', ['$http', function($http){
		var store = this;
		store.products = [];
    
		$http.get('/Angular_Level_5_store_products.json').success(function(data){
			store.products = data;
		});
	}]); */
		
	app.controller('ReviewController', function(){
		this.review = {};
		
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});
		
 	var gem = [
	{
		name: 'Dodecahedron Gem',
		price: 2.95,
		description: '. . .',
		images: [
			'dodecahedron-01-full.jpg',
			'dodecahedron-02-full.jpg',
		],
		reviews: [
			{
				stars: 5,
				body:"I love this product!",
				author:"joe@thomas.com"
			},
			{
				stars: 1,
				body:"This product sucks",
				author:"time@hater.com"
			}
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . .',
		images: [
			'pentagonal-01-full.jpg',
			'pentagonal-02-full.jpg'
		],
		reviews: [
			{
				stars: 5,
				body:"I love this product!",
				author:"joe@thomas.com"
			},
			{
				stars: 1,
				body:"This product sucks",
				author:"time@hater.com"
			}
		]
	}];
	
	
})();
