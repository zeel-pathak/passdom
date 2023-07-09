const process = require("process");
const fileExists = require("../util/CredentialsFileExists.js");
const os = require("os");
const { input, over } = require("../util/input.js");
const fs = require("fs");
const keywords = require("../reservedKeywords/reserveKeywords.js");
const encryptPassword = require("../util/encryptPassword.js");
const writeFile = require("../util/writeFile.js");

const add = async () => {

  try {
    if (process.argv[3] === undefined) {
      console.log("One more parameter required,");
      console.log(
        "Try passdom -a <Website name> or passdom add <Website name> instead."
      );
      return over();
    }

    //We need to find wheather the Cred file is there or not.
    await fileExists(os.homedir());
    const data = require(`${os.homedir()}/.credentials/cred.json`);

    if (Object.keys(data).includes(process.argv[3].toLowerCase())) {
      console.log(`Credentials for ${process.argv[3]} already exists!  
Procedding further will overwrite the existing credentials.
press 'ctrl + c' to exit.`);
    }

    if (keywords.includes(process.argv[3].toLowerCase())) {
      console.log(
        `"${process.argv[3]}" is a reserved keyword, Please try some different name!`
      );
      return over();
    }

    const username = await input("What is the username?");
    const rawPassword = await input("What is the password?");

    const password = await encryptPassword(rawPassword);

    over();

    data[process.argv[3].toLowerCase()] = {
      username,
      password,
    };

    await writeFile(data, `${os.homedir()}/.credentials/cred.json`);

    console.log(`
  successfully added the credential for ${process.argv[3]}

  ->  passdom ${process.argv[3]} // to retrieve the credentials of ${process.argv[3]}`);

    return over();

  } catch (error) {

    console.log("Error Adding Data: " + error.message)
    return over();
  
  }

};

module.exports = add;
