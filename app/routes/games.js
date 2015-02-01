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

			

			/*killersArray.forEach(function(killer){
				var newKiller = store.createRecord('killer',{
					name: killer.name,
					level: killer.level,
					baseCost: killer.baseCost
				});
				newgame.get('killers').pushObject(newKiller);
				newKiller.save();
			}); */

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
