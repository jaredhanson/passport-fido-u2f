// https://github.com/ashtuchkin/u2f

exports.USER_PRESENCE = 0x01;

exports.parse = function(buffer) {
  console.log('PARSE AUTHENTICATION RESPONSE!');
  console.log('length: ' + buffer.length);
  
  var userPresence = buffer.slice(0, 1);
  var counter = buffer.slice(1, 5);
  var signature = buffer.slice(5);
  
  
  return {
    userPresence: userPresence[0],
    counter: counter.readUInt32BE(0),
    signature: signature
  }
};

// TODO: exports.format
