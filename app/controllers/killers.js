import Ember from 'ember';

export default Ember.Controller.extend({
  huntersToShow: function(){
    return this.model.filterBy('isLocked', false);
  }.property('model.@each.isLocked')
});
