import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('game');
	},
	actions: {
		newGame: function(){
			var now = new Date();
			var store = this.store;
			var newgame = store.createRecord('game',{
				name: 'New Game',
				createdAt: now
			});

			data.killers.forEach(function(killer){
				var newKiller = store.createRecord('killer',{
					name: killer.name,
					refId: killer.id,
					baseCost: killer.baseCost
				});
				newgame.get('killers').pushObject(newKiller);
				killer.enemies.forEach(function(enemy){
					var newEnemy = store.createRecord('enemy',{
						name: enemy.name,
						refId: enemy.id,
						pointsPerKill: enemy.pointsPerKill,
						baseHp: enemy.baseHp,
						currentHp: enemy.baseHp
					});
					newKiller.get('enemies').pushObject(newEnemy);
					newEnemy.save();
				});
				newKiller.save();
			});

			//unlock first hunter of the game
			var firstKiller = newgame.get('killers').get('firstObject');
			firstKiller.set('isLocked', false).save();

			//unlock the first enemy of this hunter
			firstKiller.get('enemies').get('firstObject').set('isLocked', false).save();

			newgame.save();
		},
		deleteGame: function(game){
			game.destroyRecord();
		},
		loadGame: function(game){
			this.transitionTo('game', game.get('id'));
		}
	},
	doDamage: function(enemy){
		enemy.decrementProperty('currentHp', enemy.get('killer.number'));
		enemy.save();
	},
	init: function(){
		var that = this;
		that.store.find('enemy').then(function(enemies){
			window.setInterval(function(){
				enemies.forEach(function(enemy){
					that.doDamage(enemy);
				});
			}, 1000);
		});

		this._super();
	}
});

var data = {
	killers:[
		{id: 1, name: "Dog", baseCost: 10, enemies:[
			{id: 1, name: "Duck", pointsPerKill: 1, baseHp: 1}
		]},
		{id: 2, name: "Mario", baseCost: 100, enemies:[
			{id: 2, name: "Goomba", pointsPerKill: 10, baseHp: 1},
			{id: 3, name: "Koopa", pointsPerKill: 100, baseHp: 10},
			{id: 4, name: "Bowser", pointsPerKill: 10000, baseHp: 1000}
		]},
		{id: 3, name: "Link", baseCost: 1000, enemies:[
			{id: 5, name: "ChuChu", pointsPerKill: 100, baseHp: 1},
			{id: 6, name: "Dodongo", pointsPerKill: 1000, baseHp: 10},
			{id: 7, name: "Ganon", pointsPerKill: 100000, baseHp: 100000}
		]},
		{id: 4, name: "Samus", baseCost: 100000, enemies:[
			{id: 8, name: "Zeelas", pointsPerKill: 1000, baseHp: 1},
			{id: 9, name: "Ridley", pointsPerKill: 100000, baseHp: 100},
			{id: 10, name: "Mother Brain", pointsPerKill: 100000000, baseHp: 10000000}
		]}
	]
};
