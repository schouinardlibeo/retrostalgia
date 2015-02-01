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
	}
});
