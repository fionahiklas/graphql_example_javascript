const chai = require('chai');
const { graphql } = require('graphql');

const log = require('../lib/logging');

describe('Ping Call', () => {

  const ping_schema = require('../lib/schema/ping_schema');
  const ping_resolvers = require('../lib/schema/ping_resolvers');

  it('Should look for the correct resolvers', async () => {
    const ping_query = `
      { 
        pingQuery(echoMe: "potatoe") {
          timestamp
          message
          echoString
          status {
            howAmI
          }
        } 
      }
    `;

    const ping_resolver_proxy = new Proxy(ping_resolvers, {
      get: function(target, name) {
        log.debug('For ping_resolvers, trying to access name: %s', name);
        return target[name];
      }
    });

    const result = await graphql(ping_schema, ping_query, ping_resolver_proxy);
    log.debug('Got result: %o', result);
  });

  it('Should return a valid result', async () => {
    const ping_query = `
      { 
        pingQuery(echoMe: "potatoe") {
          echoString
        } 
      }
    `;

    // Actually make a GraphQL query against the
    const result = await graphql(ping_schema, ping_query, ping_resolvers);
    chai.assert.isNotNull(result, 'Expected a result');
    chai.assert.equal(typeof result, 'object');

    const errors = result.errors;
    log.debug('Got errors: %o', errors);
    chai.assert.notExists(errors, 'Expected no errors');

    const data = result.data;
    log.debug('Got data: %o', data);

    chai.assert.exists(data);
    chai.assert.equal(data.pingQuery.echoString, "potatoe");


    log.debug('Got result: %o', result);
  });
});