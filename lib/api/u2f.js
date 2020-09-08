var base64url = require('base64url')
  , u2f = require('../u2f');


exports = module.exports = function(req, keying, cb) {
  console.log('HANDLE U2F');
  
  if (!req.body.clientData) { return false; }
  
  var clientData = JSON.parse(base64url.decode(req.body.clientData));
  console.log(clientData);
  
  if (clientData.typ !== 'navigator.id.getAssertion') { return false; }
  
  
  var signatureData = u2f.AuthenticationResponse.parse(base64url.toBuffer(req.body.signatureData));
  console.log(signatureData);
  
  keying(req.body.keyHandle, function(err, key, user, info) {
    if (err) { return cb(err); }
    
    console.log('VERIFY WITH KEY!');
    console.log(key);
    console.log(user);
    console.log(info);
    
  });
  
  return true;
};
