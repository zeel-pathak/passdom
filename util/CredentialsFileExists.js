const fs = require("fs");

const fileExists = (homeDirectory) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(`${homeDirectory}/.credentials`)) {
            fs.mkdirSync(`${homeDirectory}/.credentials`)
        }
        
        if (!fs.existsSync(`${homeDirectory}/.credentials/cred.json`)) {
            fs.openSync(`${homeDirectory}/.credentials/cred.json`, 'a')

            const data = {}
            fs.writeFileSync(`${homeDirectory}/.credentials/cred.json`, JSON.stringify(data, null, 2))
        }
    
        return resolve()

    });
};

module.exports = fileExists;