const process = require('process');
const { over } = require("../util/input.js");
const fileExists = require("../util/CredentialsFileExists.js");
const os = require("os");
const decryptPassword = require("../util/decryptPassword.js");

const find = async () => { 
  //We need to find wheather the Cred file is there or not.

  await fileExists(os.homedir()); 
  const data = require(`${os.homedir()}/.credentials/cred.json`)

    if(process.argv[2] === undefined){
        console.log("One more parameter required,")
        console.log("Try passdom <Website name> instead.")
        return over()
    }

    if(!Object.keys(data).includes(process.argv[2].toLowerCase())){
        console.error(`
    No Credentials Found for ${process.argv[2].toLowerCase()}
`);
        return over();
    }
    
    const username = data[process.argv[2].toLowerCase()].username;
    const password = await decryptPassword(data[process.argv[2].toLowerCase()].password);
    
    console.log(`
========================================================================
                    Credentials for '${process.argv[2]}'

    Username -> ${username}
    Password -> ${password}
     
========================================================================
`);

    return over();

} 

module.exports = find;