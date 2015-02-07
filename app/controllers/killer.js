import Ember from 'ember';

export default Ember.ObjectController.extend({
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
  canBuy: function(){
    return this.model.get('score') >= this.model.get('cost');
  }.property('model.score', 'model.cost')
});
