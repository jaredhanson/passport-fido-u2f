/* global describe, it */

var AuthenticationResponse = require('../../lib/u2f/authenticationresponse');
var base64url = require('base64url');
var expect = require('chai').expect;


describe('AuthenticationResponse', function() {
  
  describe('.parse', function() {
    
    it('should do something', function() {
      var data = AuthenticationResponse.parse(base64url.toBuffer('AQAAABcwRgIhAMV5lH7JQ5hHUZ9iELRe5V2fl-VlFJFMICMKcIx-tre1AiEA6C5mfgVtPmTwO5txLZnsTRcIt5QY87XPUu_eUwjbrgU'));
      
      expect(data).to.deep.equal({
        userPresence: 1,
        counter: 23,
        signature: Buffer.from('MEYCIQDFeZR+yUOYR1GfYhC0XuVdn5flZRSRTCAjCnCMfra3tQIhAOguZn4FbT5k8DubcS2Z7E0XCLeUGPO1z1Lv3lMI264F', 'base64')
      });
    });
    
  }); // .parse
  
});
