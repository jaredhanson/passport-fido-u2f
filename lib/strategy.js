/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , base64url = require('base64url')
  , crypto = require('crypto')
  , util = require('util')
  , webauthn = require('./api/webauthn')
  , u2f = require('./api/u2f');
//  , webauthn = require('@authnomicon/webauthn')
//  , fido = require('@authnomicon/fido');


function Strategy(options, verify) {
  if (typeof options == 'function') {
    verify = options;
    options = {};
  }
  
  passport.Strategy.call(this);
  this.name = 'securitykey';
  this._stack = [
    webauthn,
    u2f
  ]
  this._verify = verify;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

Strategy.prototype.authenticate = function(req, options) {
  console.log('SECURITY KEY AUTHENTICATE!');
  console.log(req.body);
  
  var self = this
    , stack = this._stack;
  (function iter(i) {
    
    var api = stack[i];
    if (!api) {
      console.log('DONE NOT HANDLED');
      // TODO: error
      return;
    }
    
    function keying(kid, cb) {
      console.log('GET KEY: ' + kid);
      
      function keyed(err, user, publicKey, info) {
        console.log('KEYED!');
        
        return cb(err, publicKey, user, info);
      }
      
      if (self._passReqToCallback) {
        // TODO
        //this._verify(req, username, password, verified);
      } else {
        self._verify(kid, keyed);
      }
    }
    
    function complete(err, user, info) {
      console.log('OK!');
    }
    
    
    var handled = api(req, keying, complete);
    console.log('HANDLED? ' + handled);
    if (!handled) { return iter(i + 1); }
    
    
  })(0);
};


module.exports = Strategy;
