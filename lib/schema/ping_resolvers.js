const log = require('../logging');

module.exports = {

  Ping: function(obj, args, context, info) {
    log.debug('Resolver function for Ping called');
    log.debug('Arguments: "%o"', args);
    return {
      timestamp: "Test",
      message: "This is a dummy",
      echoString: args.echoString
    }
  }
};
