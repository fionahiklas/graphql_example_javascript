const chai = require('chai');


describe('Ping Schema', () => {

  const ping_schema = require('../lib/schema/ping_schema');

  it('Should return a valid schema', () => {
    chai.assert.equal(typeof ping_schema, 'object');
  });
});