const { over } = require("../util/input.js");
const fileExists = require("../util/CredentialsFileExists.js");
const os = require("os");
const decryptPassword = require("../util/decryptPassword.js");

const list = async() => {

  //We need to find wheather the Cred file is there or not.
  await fileExists(os.homedir());
  const data = require(`${os.homedir()}/.credentials/cred.json`);

  const list = Object.entries(data);
  if (!list.length) {
    console.error(`
    No Credentials Found,
    Store credentials using "passdom -a <website name>" or "passdom add <website name>"
`);
    return over();
  }

  console.log(
    `========================================================================`
  );

  for (const [
    host,
    { username = "Not Setted", password = "Not Setted" },
  ] of list) {
    const rawPassword = await decryptPassword(password);
    console.log(`
        Credentials for '${host.toUpperCase()}' 
            Username -> ${username}
            Password -> ${rawPassword}
    `);
  }

  console.log(
    `========================================================================`
  );

  return over();
};
module.exports = list;
