const log = require('../logging');

module.exports = {

  pingQuery: function(args) {
    log.debug('Resolver function for pingQuery called');
    log.debug('Arguments: "%o"', args);
    return {
      timestamp: "Test",
      message: "This is a dummy",
      echoString: args.echoMe
    }
  }

  // obj, args, context, info
};
