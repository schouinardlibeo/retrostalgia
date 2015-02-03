import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('game', params.id);
	},
	setupController: function(controller, model){
		window.setInterval(function(){
			//this is the main game loop. Do things here.
		}, 1000);
		this._super(controller, model);
	}
});
