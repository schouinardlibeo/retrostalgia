import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('game', params.game_id);
	},
	actions: {
		buyOne: function(killer){
			killer.incrementProperty('number');
			killer.save();
		}
	}
});
