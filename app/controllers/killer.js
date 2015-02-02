import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    doDamage: function(enemy){
      enemy.incrementProperty('killed');
      enemy.save();
    }
  }
});
