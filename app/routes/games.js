import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('game');
	},
	actions: {
		newGame: function(){
			var now = new Date();
			var store = this.store;
			var newgame = store.createRecord('game',{
				name: 'New Game',
				createdAt: now
			});
			newgame.save();

			//i need to put this in a kind of reference file or something
			var killersArray = [
					{id: 1,	name: "Dog", level: 1, baseCost: 10},
					{id: 2,	name: "Mario", level: 2, baseCost: 100},
					{id: 3, name: "Link", level: 3, baseCost: 1000}
				];

			killersArray.forEach(function(killer){
				var newKiller = store.createRecord('killer',{
					name: killer.name,
					level: killer.level,
					baseCost: killer.baseCost
				});
				newgame.get('killers').pushObject(newKiller);
			});
			newgame.save();



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
