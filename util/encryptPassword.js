var crypto = require("crypto");

const encryptPassword = (rawPassword) => {
  return new Promise((resolve, reject) => {
      
    const key = crypto.createHash('sha256').update('Nixnogen').digest()
    const iv = 'a2xhcgAAAAAAAAAA'
    
    var cipher = crypto.createCipheriv(
      "aes-256-cbc",
      key,
      iv
    );
          
    return resolve(Buffer.concat([
      cipher.update(rawPassword),
      cipher.final()
    ]).toString("base64"));
  });
};

module.exports = encryptPassword;