const log = require('../logging');


const statusFunction = function(args) {
  log.debug('Resolver function for status called');
  log.debug('Arguments: "%o"', args);
  return { howAmI: "Super duper" };
};

const pingFunction = function(args) {
  log.debug('Resolver function for pingQuery called');
  log.debug('Arguments: "%o"', args);
  return {
    timestamp: "Test",
    message: "This is a dummy",
    echoString: args.echoMe,
    status: statusFunction
  }
};

module.exports = {

  pingQuery: pingFunction

  // obj, args, context, info
};
