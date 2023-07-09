const os = require("os");
const fs = require("fs");
const process = require("process");

const writeFile = (data,path) => {
    return new Promise((resolve, reject) => {
            fs.writeFile(
              path,
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