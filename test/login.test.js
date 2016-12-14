const Services = require('../src/services');
const MongoDB = require('mongodb');

describe('Services', () => {
  describe('getPlayer(name,password)', () => {

    it('finds a player by their name', () => {
      const name = 'John';
      const password = 'D0n3';
      return Services.getPlayer(name, password)
        .then(player => {
          expect(player).to.not.be.empty();
        });
    })
  })
});
