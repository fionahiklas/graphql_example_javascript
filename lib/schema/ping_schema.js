const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Ping {
    timestamp: String,
    message: String,
    echoString: String
  }

  type Query {
    ping(echoString: String): Ping
  }
  
  schema {
    query: Query
  }
`);
