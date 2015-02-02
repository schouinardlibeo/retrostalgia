import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pointsPerKill: DS.attr('number'),
  baseHp: DS.attr('number'),
  currentHp: DS.attr('number'),
  killed: DS.attr('number', {defaultValue: 0}),
  killer: DS.belongsTo('killer')
});
