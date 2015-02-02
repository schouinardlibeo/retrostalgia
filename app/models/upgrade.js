import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  desc: DS.attr('string'),
  cost: DS.attr('number'),
  enabled: DS.attr('boolean'),
  order: DS.attr('number'),
  killer: DS.belongsTo('killer')
});
