import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  refId: DS.attr('number'),
  isLocked: DS.attr('boolean', {defaultValue: true}),
  pointsPerKill: DS.attr('number'),
  baseHp: DS.attr('number'),
  currentHp: DS.attr('number'),
  killed: DS.attr('number', {defaultValue: 0}),
  killer: DS.belongsTo('killer'),
  isHit: function() {
    if(this.get('currentHp') <= 0){
      //get damage difference to see if multiple kill
      //example: hit with 10 damage but baseHp = 1 then 10 kills
      var overkill = 0 - this.get('currentHp');
      var enemiesKilled = Math.floor(overkill / this.get('baseHp')) + 1;
      //enemy is killed
      this.incrementProperty('killed', enemiesKilled);
      var game = this.get('killer').get('game');
      game.incrementProperty('score', this.get('pointsPerKill') * enemiesKilled);
      game.save();
      this.set('currentHp', this.get('baseHp'));
      this.save();
    }
  }.observes('currentHp')
});
