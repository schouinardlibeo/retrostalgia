import Ember from 'ember';

export default Ember.Controller.extend({
	killers: [{
		id: 1,
		name: "Dog",
		level: 1,
		baseCost: 10
	},{
		id: 2,
		name: "Mario",
		level: 2,
		baseCost: 100
	},{
		id: 3,
		name: "Link",
		level: 3,
		baseCost: 1000
	}]
});
