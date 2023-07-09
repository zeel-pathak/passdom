const fileExists = require("../util/CredentialsFileExists.js");
const writeFile = require("../util/writeFile.js");
const { over } = require("../util/input.js");
const os = require("os");

const exportCredentials = async () => {

    try {
        await fileExists(os.homedir());
        const data = require(`${os.homedir()}/.credentials/cred.json`);

        await writeFile(data, `${os.homedir}/passdomExportedCredentials.txt`);

        return over()
    } catch (error) {
        console.log(error);
        return over();
    }
}

module.exports = exportCredentials;