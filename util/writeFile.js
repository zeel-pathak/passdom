const os = require("os");
const fs = require("fs");
const process = require("process");

const writeFile = (data) => {
    return new Promise((resolve, reject) => {
            fs.writeFile(
              `${os.homedir()}/.credentials/cred.json`,
              JSON.stringify(data, null, 2),
              (err) => {
                if (err) {
                  reject(err);
                }
                resolve();
              }
            );
    })
}

module.exports = writeFile