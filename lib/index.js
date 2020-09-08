/**
 * Module dependencies.
 */
var Strategy = require('./strategy');


/**
 * Expose `Strategy` directly from package.
 */
exports = module.exports = Strategy;

/**
 * Export constructors.
 */
exports.Strategy = Strategy;

exports.u2f = require('./u2f');
