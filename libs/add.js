const process = require("process");
  const fileExists = require("../util/CredentialsFileExists.js");
  const os = require("os");
const { input, over } = require("../util/input.js");
const fs = require("fs");
const keywords = require("../reservedKeywords/reserveKeywords.js");

const add = async () => {
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
  const password = await input("What is the password?");

  over();

  data[process.argv[3].toLowerCase()] = {
    username,
    password,
  };

  fs.writeFile(
    `${os.homedir()}/.credentials/cred.json`,
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) {
        console.log("Error Storing Credentials", err.message);
      } else {
        console.log(`
successfully added the credential for ${process.argv[3]}

->  passdom ${process.argv[3]} // to retrieve the credentials of ${process.argv[3]}`);
      }
    }
  );
};

module.exports = add;
