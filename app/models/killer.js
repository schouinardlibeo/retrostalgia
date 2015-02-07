import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	name: DS.attr('string'),
	refId: DS.attr('number'),
	baseCost: DS.attr('number'),
	multiplier: DS.attr('number', {defaultValue: 1}),
	number: DS.attr('number', {defaultValue: 1}),
	isLocked: DS.attr('boolean', {defaultValue: true}),
	game: DS.belongsTo('game'),
	enemies: DS.hasMany('enemy', {async: true}),
	upgrades: DS.hasMany('upgrade', {async: true}),
	score: Ember.computed.alias('game.score'),
	cost: function() {
		return Math.floor(this.get('baseCost') * Math.pow(1.1, this.get('number')));
	}.property('baseCost','number'),
	unlockNextLevel: function(){
		if(this.get('number') === 50){
			var nextKiller = this.get('game').get('killers').findBy('refId', this.get('refId') + 1);
			nextKiller.set('isLocked', false).save();
		}
	}.observes('number')
});
