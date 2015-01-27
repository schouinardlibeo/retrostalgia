import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('game');
	},
	actions: {
		newGame: function(){
			var newgame = this.store.createRecord('game',{
				name: 'Duck Hunt',
				createdAt: function(){
					return new Date();
				}
			});
			newgame.save();
			
			//declare killers
			var pushData = {
				killers : [
					{id: 1,	name: "Dog", level: 1, baseCost: 10},
					{id: 2,	name: "Mario", level: 2, baseCost: 100},
					{id: 3, name: "Link", level: 3, baseCost: 1000}
				]
			};

			//push killers in the store (it will update the store if an older version of the game is present)
			this.store.pushPayload(pushData);

		},
		deleteGame: function(game){
			game.deleteRecord();
			game.save();
		},
		loadGame: function(game){
			this.transitionTo('game', game.get('id'));
		}
	}
});
