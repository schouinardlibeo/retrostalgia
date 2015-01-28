import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	baseCost: DS.attr('number'),
	level: DS.attr('number'),
	strength: DS.attr('number'),
	number: DS.attr('number'),
	game: DS.belongsTo('game')
});
