import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('game', params.id);
	},
	actions: {
		buyOne: function(killer){
			//check if there is enough score to buy one
			if(killer.get('game').get('score') > killer.get('cost')){
				killer.get('game').decrementProperty('score', killer.get('cost'));
				killer.get('game').save();
				//increment the number
				killer.incrementProperty('number');
				killer.save();
			}
		}
	},
	setupController: function(controller, model){
		window.setInterval(function(){
			//this is the main game loop. Do things here.
		}, 1000);
		this._super(controller, model);
	}
});
