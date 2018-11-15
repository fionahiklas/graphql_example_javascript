const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Status {
  howAmI: String
}

type Ping {
  timestamp: String
  message: String
  echoString: String
  status: Status
}

type Query {
  pingQuery(echoMe: String): Ping
  #statusQuery(): Status
}

`);
