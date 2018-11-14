const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    timestamp: String,
    message: String,
    queryContextEcho: String
  }
`);
