// https://github.com/ashtuchkin/u2f


function asn1Len(buf) {
    if (buf.length < 2 || buf[0] != 0x30)
        throw new Error("Invalid data: Not a SEQUENCE ASN/DER structure");

    var len = buf[1];
    if (len & 0x80) { // long form
        var bytesCnt = len & 0x7F;
        if (buf.length < 2+bytesCnt)
            throw new Error("Invalid data: ASN structure not fully represented");
        len = 0;
        for (var i = 0; i < bytesCnt; i++)
            len = len*0x100 + buf[2+i];
        len += bytesCnt; // add bytes for length itself.
    }
    return len + 2; // add 2 initial bytes: type and length.
}




exports.parse = function(buffer) {
  var reserved = buffer.slice(0, 1);
  var pos, len;
  
  reserved = reserved[0];
  if (reserved != 0x05) {
    throw new Error('Data is not a FIDO U2F registration response');
  }
  
  var userPublicKey = buffer.slice(1, 66); 
  
  len = buffer.slice(66, 67);
  len = len[0];
  var keyHandle = buffer.slice(67, 67 + len);
  pos = 67 + len;
  
  len = asn1Len(buffer.slice(pos));
  var attestationCertificate = buffer.slice(pos, pos + len);
  pos = pos + len;
  
  var signature = buffer.slice(pos);
  
  
  return {
    userPublicKey: userPublicKey,
    keyHandle: keyHandle,
    attestationCertificate: attestationCertificate,
    signature: signature
  }
  
};

// TODO: exports.format
