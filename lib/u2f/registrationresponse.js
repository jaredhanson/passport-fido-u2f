// https://github.com/ashtuchkin/u2f

exports.parse = function(buffer) {
  console.log('PARSE REGISTRATION RESPONSE!');
  console.log('length: ' + buffer.length);
  
  var reserved = buffer.slice(0, 1);
  var pos, len;
  console.log(reserved);
  reserved = reserved[0];
  console.log(reserved);
  
  console.log('--');
  
  if (reserved != 0x05) {
    console.log('BAD DATA');
    throw new Error('Data is not a FIDO U2F registration response');
  }
  
  var userPublicKey = buffer.slice(1, 66); 
  len = buffer.slice(66, 67);
  len = len[0];
  var keyHandle = buffer.slice(67, 67 + len);
  pos = 67 + len;
  
  console.log(len)
  
  return {
    userPublicKey: userPublicKey,
    keyHandle: keyHandle
  }
  
};

// TODO: exports.format
