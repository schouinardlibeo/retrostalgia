import DS from 'ember-data';

export default DS.Model.extend({
	number: DS.attr('number'),
	strength: DS.attr('number'),
	game: DS.belongsTo('game', {async: false}),
	killer: DS.belongsTo('killer', {async: false})
});
