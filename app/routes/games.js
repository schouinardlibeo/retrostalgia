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
