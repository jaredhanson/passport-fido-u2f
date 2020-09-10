/* global describe, it */

var RegistrationResponse = require('../../lib/u2f/registrationresponse');
var base64url = require('base64url');
var expect = require('chai').expect;


describe('AuthenticationResponse', function() {
  
  describe('.parse', function() {
    
    it('should do something', function() {
      var data = RegistrationResponse.parse(base64url.toBuffer('BQQCwPZ6Q1R60N1b3FhdTFxprOFalF38FPUxMShYlpmEDpFzKV-0nIVOn-bSiwk_B20Q0HUd1OPhtrdE7LOgECblQBc5Y_ezL7D9Q0FIrq29zOscbXpfx5rdvHS3YwBB66iugag4cc39q6s-rrOQa1bfd5h9a0yZQzjK40vYYqW_iHMwggJPMIIBN6ADAgECAgQSNtF_MA0GCSqGSIb3DQEBCwUAMC4xLDAqBgNVBAMTI1l1YmljbyBVMkYgUm9vdCBDQSBTZXJpYWwgNDU3MjAwNjMxMCAXDTE0MDgwMTAwMDAwMFoYDzIwNTAwOTA0MDAwMDAwWjAxMS8wLQYDVQQDDCZZdWJpY28gVTJGIEVFIFNlcmlhbCAyMzkyNTczNDEwMzI0MTA4NzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABNNlqR5emeDVtDnA2a-7h_QFjkfdErFE7bFNKzP401wVE-QNefD5maviNnGVk4HJ3CsHhYuCrGNHYgTM9zTWriGjOzA5MCIGCSsGAQQBgsQKAgQVMS4zLjYuMS40LjEuNDE0ODIuMS41MBMGCysGAQQBguUcAgEBBAQDAgUgMA0GCSqGSIb3DQEBCwUAA4IBAQAiG5uzsnIk8T6-oyLwNR6vRklmo29yaYV8jiP55QW1UnXdTkEiPn8mEQkUac-Sn6UmPmzHdoGySG2q9B-xz6voVQjxP2dQ9sgbKd5gG15yCLv6ZHblZKkdfWSrUkrQTrtaziGLFSbxcfh83vUjmOhDLFC5vxV4GXq2674yq9F2kzg4nCS4yXrO4_G8YWR2yvQvE2ffKSjQJlXGO5080Ktptplv5XN4i5lS-AKrT5QRVbEJ3B4g7G0lQhdYV-6r4ZtHil8mF4YNMZ0-RaYPxAaYNWkFYdzOZCaIdQbXRZefgGfbMUiAC2gwWN7fiPHV9eu82NYypGU32OijG9BjhGt_MEUCIHDMSXhC5e3ulNXJpGmT8Zap_WEF3uNfAVdpZQm8qUyBAiEAzQOsWy29ZMoQoWFQ2S58XxlcGtxuVqzrUtDGnJe3W-c'));
      expect(data).to.deep.equal({
        userPublicKey: Buffer.from('BALA9npDVHrQ3VvcWF1MXGms4VqUXfwU9TExKFiWmYQOkXMpX7SchU6f5tKLCT8HbRDQdR3U4+G2t0Tss6AQJuU=', 'base64'),
        keyHandle: Buffer.from('Fzlj97MvsP1DQUiurb3M6xxtel/Hmt28dLdjAEHrqK6BqDhxzf2rqz6us5BrVt93mH1rTJlDOMrjS9hipb+Icw==', 'base64'),
        attestationCertificate: Buffer.from('MIICTzCCATegAwIBAgIEEjbRfzANBgkqhkiG9w0BAQsFADAuMSwwKgYDVQQDEyNZdWJpY28gVTJGIFJvb3QgQ0EgU2VyaWFsIDQ1NzIwMDYzMTAgFw0xNDA4MDEwMDAwMDBaGA8yMDUwMDkwNDAwMDAwMFowMTEvMC0GA1UEAwwmWXViaWNvIFUyRiBFRSBTZXJpYWwgMjM5MjU3MzQxMDMyNDEwODcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAATTZakeXpng1bQ5wNmvu4f0BY5H3RKxRO2xTSsz+NNcFRPkDXnw+Zmr4jZxlZOBydwrB4WLgqxjR2IEzPc01q4hozswOTAiBgkrBgEEAYLECgIEFTEuMy42LjEuNC4xLjQxNDgyLjEuNTATBgsrBgEEAYLlHAIBAQQEAwIFIDANBgkqhkiG9w0BAQsFAAOCAQEAIhubs7JyJPE+vqMi8DUer0ZJZqNvcmmFfI4j+eUFtVJ13U5BIj5/JhEJFGnPkp+lJj5sx3aBskhtqvQfsc+r6FUI8T9nUPbIGyneYBtecgi7+mR25WSpHX1kq1JK0E67Ws4hixUm8XH4fN71I5joQyxQub8VeBl6tuu+MqvRdpM4OJwkuMl6zuPxvGFkdsr0LxNn3yko0CZVxjudPNCrabaZb+VzeIuZUvgCq0+UEVWxCdweIOxtJUIXWFfuq+GbR4pfJheGDTGdPkWmD8QGmDVpBWHczmQmiHUG10WXn4Bn2zFIgAtoMFje34jx1fXrvNjWMqRlN9jooxvQY4Rrfw==', 'base64'),
        signature: Buffer.from('MEUCIHDMSXhC5e3ulNXJpGmT8Zap/WEF3uNfAVdpZQm8qUyBAiEAzQOsWy29ZMoQoWFQ2S58XxlcGtxuVqzrUtDGnJe3W+c=', 'base64')
      });
    });
    
  }); // .parse
  
});
