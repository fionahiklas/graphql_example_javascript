const chai = require('chai');
const { graphql } = require('graphql');

const log = require('../lib/logging');

describe('Ping Call', () => {

  const ping_schema = require('../lib/schema/ping_schema');
  const ping_resolvers = require('../lib/schema/ping_resolvers');

  it('Should return a valid result', async () => {
    const ping_query = `
      { 
        ping(echoString: "potatoe") {
          echoString
        } 
      }
    `;

    // Actually make a GraphQL query against the
    const result = await graphql(ping_schema, ping_query, ping_resolvers);
    chai.assert.isNotNull(result, 'Expected a result');
    chai.assert.equal(typeof result, 'object');
    chai.assert.notExists(result.errors, 'Expected no errors');

    log.debug('Got result: %o', result);
  });
});