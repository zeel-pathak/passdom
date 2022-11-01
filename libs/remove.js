const process = require("process"); 
const { input, over } = require("../util/input.js");
const fs = require("fs");
const fileExists = require("../util/CredentialsFileExists.js");
const writeFile = require("../util/writeFile.js");
const os = require("os");

const remove = async () => {
  //We need to find wheather the Cred file is there or not.
  await fileExists(os.homedir());
  const data = require(`${os.homedir()}/.credentials/cred.json`);

  if (process.argv[3] === undefined) {
    console.log("One more parameter required,");
    console.log(
      "Try passdom -r <Website name> or passdom remove <Website name> instead."
    );
    return over();
  }

  if (!Object.keys(data).includes(process.argv[3].toLowerCase())) {
    console.log(
      `Credentials for ${process.argv[3].toLowerCase()} not found, Hence not removed!`
    );
    return over();
  }

  let inputVal = await input(
    `Are you sure you want to remove "${process.argv[3]}" credentials? (y/n) `
  );
  let val = inputVal.toLowerCase();

  if (val === "y" || val === "yes") {
    delete data[process.argv[3].toLowerCase()];

    writeFile(data).
      then((message) => console.log(message)).
      catch((err) => console.log(err))

      return over();
  }
  return over();
}

module.exports = remove;