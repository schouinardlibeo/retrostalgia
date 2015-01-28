import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	level: DS.attr('number', {defaultValue: 1}),
	score: DS.attr('number', {defaultValue: 0}),
	highscore: DS.attr('number', {defaultValue: 0}),
	killers: DS.hasMany('killer', {async: false}),
	createdAt: DS.attr('date'),
	lastSave: DS.attr('date')
});
