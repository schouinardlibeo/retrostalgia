import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    hit: function(enemy){
      this.doDamage(enemy, 1);
    },
    buyOne: function(){
			//check if there is enough score to buy one
			if(this.get('canBuy')){
				this.model.get('game').decrementProperty('score', this.model.get('cost'));
				this.model.get('game').save();
				//increment the number
				this.model.incrementProperty('number');
				this.model.save();
			}
		}
  },
  doDamage: function(enemy, damage){
    enemy.decrementProperty('currentHp', damage);
    enemy.save();
  },
  canBuy: function(){
    return this.model.get('score') >= this.model.get('cost');
  }.property('model.score', 'model.cost'),
  init: function(){
    var that = this;
    var model = that.model;
    window.setInterval(function(){
      //this is the damage loop. Do things here.
      model.get('enemies').then(function(enemies){
        enemies.forEach(function(enemy){
          that.doDamage(enemy, model.get('number'));
        });
      });
    }, 1000);
    this._super();
  }
});
