import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('game', params.id);
	},
	actions: {
		buyOne: function(killer){
			//check if there is enough score to buy one
			//increment the number
			killer.incrementProperty('number');
			killer.save();
		}
	},
	setupController: function(controller, model){
    this.initializeGame(model);
		this._super(controller, model);
  },
	initializeGame: function(game){
		//i need to put this in a kind of reference file or something
		Ember.Logger.debug('game killers:' + game.id);
		var data = {
			killers:[
				{id: 1, name: "Dog", baseCost: 10, enemies:[1], game: game.id},
				{id: 2, name: "Mario", baseCost: 100, enemies:[2,3,4], game: game.id},
				{id: 3, name: "Link", baseCost: 1000, enemies:[5,6,7], game: game.id},
				{id: 4, name: "Samus", baseCost: 100000, enemies:[8,9,10], game: game.id}
			],
			enemies:[
				{id: 1, name: "Duck", pointsPerKill: 1, baseHp: 1},
				{id: 2, name: "Goomba", pointsPerKill: 10, baseHp: 1},
				{id: 3, name: "Koopa", pointsPerKill: 100, baseHp: 10},
				{id: 4, name: "Bowser", pointsPerKill: 10000, baseHp: 1000},
				{id: 5, name: "ChuChu", pointsPerKill: 100, baseHp: 1},
				{id: 6, name: "Dodongo", pointsPerKill: 1000, baseHp: 10},
				{id: 7, name: "Ganon", pointsPerKill: 100000, baseHp: 100000},
				{id: 8, name: "Zeelas", pointsPerKill: 1000, baseHp: 1},
				{id: 9, name: "Ridley", pointsPerKill: 100000, baseHp: 100},
				{id: 10, name: "Mother Brain", pointsPerKill: 100000000, baseHp: 10000000}
			]
		};
		
	}
});
