import Ember from 'ember';

export default Ember.Controller.extend({
	action:{

	},
  doDamage: function(enemy, damage){
    enemy.decrementProperty('currentHp', damage);
    enemy.save();
  },
  init: function(){
    var that = this;
    var model = that.model;
    window.setInterval(function(){
      //this is the damage loop. Do things here.
      that.model.get('killers').then(function(killers){
        killers.forEach(function(killer){
          killer.get('enemies').then(function(enemies){
            enemies.forEach(function(enemy){
              that.doDamage(enemy, killer.get('number') / 10);
            });
          });
        });
      });
    }, 100);
    this._super();
  }
});
