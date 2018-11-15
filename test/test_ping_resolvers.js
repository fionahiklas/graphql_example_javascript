const chai = require('chai');

describe('Ping Resolvers', () => {

  const ping_resolvers = require('../lib/schema/ping_resolvers');

  it('Should object containing Ping', () => {
    chai.assert.equal(typeof ping_resolvers, 'object');
    chai.assert.isNotNull(ping_resolvers.pingQuery);
    chai.assert.typeOf(ping_resolvers.pingQuery, 'function');
  });

  describe('Resolver for Ping', () => {

    it('Should return a non-null result', () => {
      const result = ping_resolvers.pingQuery({ echoMe: 'test'});
      chai.assert.isNotNull(result);
    });

    it('Should copy echoString argument to result', () => {
      const test_string = "Sergent Angua";
      const result = ping_resolvers.pingQuery({ echoMe: test_string });
      chai.assert.equal(result.echoString, test_string);
    })
  });

});