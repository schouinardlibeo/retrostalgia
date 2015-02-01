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
					{id: 1,	name: "Dog", baseCost: 10},
					{id: 2,	name: "Mario", baseCost: 100},
					{id: 3, name: "Link", baseCost: 1000},
					{id: 4, name: "Samus", baseCost: 10000}
				];

			killersArray.forEach(function(killer){
				var newKiller = store.createRecord('killer',{
					name: killer.name,
					level: killer.level,
					baseCost: killer.baseCost
				});
				newgame.get('killers').pushObject(newKiller);
				newKiller.save();
			});
			newgame.save();
		},
		deleteGame: function(game){
			game.destroyRecord();
		},
		loadGame: function(game){
			this.transitionTo('game', game.get('id'));
		}
	}
});
