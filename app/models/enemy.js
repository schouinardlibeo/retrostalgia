import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pointsPerKill: DS.attr('number'),
  level: DS.attr('number'),
  killed: DS.attr('number'),
  game: DS.belongsTo('game')
});
