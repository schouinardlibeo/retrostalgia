import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	refId: DS.attr('number'),
	baseCost: DS.attr('number'),
	multiplier: DS.attr('number', {defaultValue: 1}),
	number: DS.attr('number', {defaultValue: 0}),
	isLocked: DS.attr('boolean', {defaultValue: true}),
	game: DS.belongsTo('game'),
	enemies: DS.hasMany('enemy', {async: true}),
	upgrades: DS.hasMany('upgrade', {async: true}),
	cost: function() {
		return Math.floor(this.get('baseCost') * Math.pow(1.1, this.get('number')));
	}.property('baseCost','number'),
	canBuy: function(){
		return this.get('game').get('score') > this.get('cost');
	}.property('game.score', 'cost'),
	isNotBuyable: function(){
		return !this.get('canBuy');
	}.property()
});
