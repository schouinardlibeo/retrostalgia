import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	baseCost: DS.attr('number'),
	multiplier: DS.attr('number', {defaultValue: 1}),
	number: DS.attr('number', {defaultValue: 0}),
	locked: DS.attr('boolean'),
	game: DS.belongsTo('game')
});
