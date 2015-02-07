import Ember from 'ember';

export default Ember.ArrayController.extend({
  highScore: function(){
    return this.reduce(function(previousValue, game){
      return previousValue + game.get('score');
    }, 0);
  }.property('@each.score')
});
