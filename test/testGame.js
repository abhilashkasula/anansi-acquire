const assert = require('chai').assert;
const Game = require('../lib/models/game');

describe('Game', () => {
  describe('addPlayer', () => {
    it('should add a player with the given id and name', () => {
      const game = new Game(1, 1, []);
      game.addPlayer(12, 'test');
      game.addPlayer(13, 'test2');
      const expected = {name: 'test2',
        assets: {
          money: 6000,
          tiles: ['5D', '6C', '8F', '2D', '10I', '12E'],
          stocks: {
            phoenix: 0,
            quantum: 0, 
            hydra: 0, 
            fusion: 0, 
            america: 0, 
            sackson: 0, 
            zeta: 0}
        },
        statusMsg: 'waiting for your turn'
      };
      assert.deepStrictEqual(game.getStatus(13).player, expected);
    });
  });

  describe('setCurrentPlayerStatus', () => {
    it('should set current player status', () => {
      const game = new Game(1, 1, []);
      game.addPlayer(12, 'test');
      game.setCurrentPlayerStatus();
      const expected = {name: 'test',
        assets: {
          money: 6000,
          tiles: ['5D', '6C', '8F', '2D', '10I', '12E'],
          stocks: {
            phoenix: 0,
            quantum: 0, 
            hydra: 0, 
            fusion: 0, 
            america: 0, 
            sackson: 0, 
            zeta: 0}
        },
        statusMsg: 'it is your turn, place a tile'
      };
      assert.deepStrictEqual(game.getStatus(12).player, expected);
    });
  });

  describe('hasAllPlayerJoined', () => {
    it('should give true when all players has joined', () => {
      const game = new Game(1, 1, []);
      game.addPlayer(12, 'test');
      assert.ok(game.hasAllPlayerJoined());
    });

    it('should give false when all players has not joined', () => {
      const game = new Game(1, 3, []);
      game.addPlayer(12, 'test');
      assert.notOk(game.hasAllPlayerJoined());
    });
  });
});