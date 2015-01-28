import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	baseCost: DS.attr('number'),
	level: DS.attr('number'),
	strength: DS.attr('number', {defaultValue: 1}),
	number: DS.attr('number', {defaultValue: 0}),
	game: DS.belongsTo('game')
});
