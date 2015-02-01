import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("games", {path: "/"});
  this.resource("game", {path: "game/:id"});
});

export default Router;
