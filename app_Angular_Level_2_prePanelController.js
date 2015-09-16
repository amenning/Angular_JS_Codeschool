(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gem;
	});
	
	var gem = [
	{
		name: 'Dodecahedron Gem',
		price: 2.95,
		description: '. . .',
		images: [
		{
			full: 'dodecahedron-01-full.jpg',
			thumb: 'dodecahedron-01-thumb.jpg'
		},
		{
			full: 'dodecahedron-02-full.jpg',
			thumb: 'dodecahedron-02-thumb.jpg'
		}
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . .',
		images: [
		{
			full: 'pentagonal-01-full.jpg',
			thumb: 'pentagonal-01-thumb.jpg'
		},
		{
			full: 'pentagonal-02-full.jpg',
			thumb: 'pentagonal-02-thumb.jpg'
		}
		]
	}];
	
})();
