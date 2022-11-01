const os = require("os");
const fs = require("fs");

const writeFile = (data) => {
    return new Promise((resolve, reject) => {
            fs.writeFile(
              `${os.homedir()}/.credentials/cred.json`,
              JSON.stringify(data, null, 2),
              (err) => {
                if (err) {
                  reject("Error removing credentials");
                }
                resolve(
                  `Successfully removed credentials for ${process.argv[3].toLowerCase()}`
                );
              }
            );
    })
}

module.exports = writeFile