var crypto = require("crypto");

const encryptPassword = (rawPassword) => {
    return new Promise((resolve, reject) => {

        const algorithm = 'aes-192-cbc';
        const password = 'Password used to generate key';
        
        // First, we'll generate the key. The key length is dependent on the algorithm.
        // In this case for aes192, it is 24 bytes (192 bits).
        crypto.scrypt(password, 'salt', 24, (err, key) => {
            if (err) throw reject(err);
            // Then, we'll generate a random initialization vector
            crypto.randomFill(new Uint8Array(16), (err, iv) => {
            if (err) throw err;

            const cipher = crypto.createCipheriv(algorithm, key, iv);

            let encryptedPassword = cipher.update( rawPassword , 'utf8', 'hex');
            encryptedPassword += cipher.final('hex');
            return resolve(encryptedPassword);
            });
        });
  });
};

module.exports = encryptPassword;