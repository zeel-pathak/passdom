const data = require("../localStorage/cred.json");
const { over } = require("../util/input.js");

const list = () => {
  const list = Object.entries(data);
  if (!list.length) {
    console.error(`
    No Credentials Found
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
    console.log(`
        '${host}' Credentials
            Username -> ${username}
            Password -> ${password}
    `);
  }
  console.log(
    `========================================================================`
  );

  return over();
};
module.exports = list;
