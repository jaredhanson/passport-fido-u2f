/* global describe, it */

var strategy = require('..');
var expect = require('chai').expect;


describe('passport-fido-u2f', function() {
  
  it('should export Strategy constructor directly from package', function() {
    expect(strategy).to.be.a('function');
    expect(strategy).to.equal(strategy.Strategy);
  });
  
  it('should export U2F utilities', function() {
    expect(strategy.u2f).to.be.an('object');
    expect(strategy.u2f.AuthenticationResponse).to.be.an('object');
    expect(strategy.u2f.RegistrationResponse).to.be.an('object');
  });
  
});
