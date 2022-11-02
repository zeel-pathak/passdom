const process = require("process"); 
const { input, over } = require("../util/input.js");
const fs = require("fs");
const fileExists = require("../util/CredentialsFileExists.js");
const writeFile = require("../util/writeFile.js");
const os = require("os");

const remove = async () => {

  try {
    //We need to find wheather the Cred file is there or not.
    await fileExists(os.homedir());
    let data = require(`${os.homedir()}/.credentials/cred.json`);

    if (process.argv[3] === undefined) {
      console.log("One more parameter required,");
      console.log(
        "Try passdom -r <Website name> or passdom remove <Website name> instead."
      );
      return over();
    }

    if (
      !(Object.keys(data).includes(process.argv[3].toLowerCase()) || process.argv[3].toLowerCase() == "all")
    ) {
      console.log(
        `Credentials for ${process.argv[3].toLowerCase()} not found, Hence not removed!`
      );
      return over();
    }

    let inputVal = await input(
      `Are you sure you want to remove "${process.argv[3]}" credentials? (y/n) `
    );

    let val = inputVal.toLowerCase();

    if (val[0] === "y") {
      if (process.argv[3].toLowerCase() == "all") {
        data = {};
      } else {
        delete data[process.argv[3].toLowerCase()];
      }

      await writeFile(data);
      console.log(
        `Successfully removed ${process.argv[3].toLowerCase()} credentials`
      );
      return over();
    }
    return over();

  } catch (error) {
    console.log("Error Removing the Data: ", error.message);
    return over();
  }


}

module.exports = remove;