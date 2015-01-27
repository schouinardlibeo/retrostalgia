import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	level: DS.attr('number', {defaultValue: 1}),
	score: DS.attr('number', {defaultValue: 0}),
	highscore: DS.attr('number', {defaultValue: 0}),
	hiredKillers: DS.hasMany('hiredKiller', {async: false}),
	createdAt: DS.attr('date'),
	lastSave: DS.attr('date')
});
