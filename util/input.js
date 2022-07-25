const process = require("process");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const input = (question) => {

    return new Promise((resolve, reject) => {
        readline.question(`${question} `, ans => {
            resolve(ans);
          });        
    })
}

const over = () =>  readline.close()

module.exports = {input, over}