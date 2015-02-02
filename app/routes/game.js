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
		this.startAttackLoop(this.model);
		this._super(controller, model);
	},
	startAttackLoop: function(model){
		Ember.Logger.debug('starting attack loop of ', model.name);
		setInterval(function(model) {
			/*killer.get('enemies').then(function(enemies){
				enemies.forEach(function(enemy){
					enemy.decrementProperty('currentHp', killer.number);
				});
			}); */
			Ember.Logger.debug('looping into game');
		}, 1000);
	}
});
