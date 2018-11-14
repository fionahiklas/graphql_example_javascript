const Winston = require('winston');

module.exports = Winston.createLogger({
  level: 'debug',
  format: Winston.format.splat(),
  transports: [
      new Winston.transports.Console({
        format: Winston.format.combine(
            Winston.format.splat(),
            Winston.format.simple()
        )
      })
  ]
});