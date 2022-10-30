const crypto = require("crypto");
const buffer = require("buffer");

const decryptPassword = (encryptedPassword) => {
  return new Promise((resolve, reject) => {
    
    const key =  crypto.createHash('sha256').update('Nixnogen').digest()
    const iv = 'a2xhcgAAAAAAAAAA'
        
    var decipher = crypto.createDecipheriv(
          "aes-256-cbc",
          key,
          iv
    );
        
    return resolve(Buffer.concat([
        decipher.update(encryptedPassword, "base64"), // Expect `text` to be a base64 string
        decipher.final(),
    ]).toString());
  });
};

module.exports = decryptPassword;