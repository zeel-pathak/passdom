const process = require("process");
const data = require("../localStorage/cred.json");
const { input, over } = require("../util/input.js");
const fs = require("fs");

const remove = async () => {


    if (Object.keys(data).includes(process.argv[3].toLowerCase())) {

        let inputVal = await input("Are you sure you want to remove this account? (y/n) ")
        let val = inputVal.toLowerCase();
        if (val === "y" || val === "yes") {
            delete data[process.argv[3].toLowerCase()]
            fs.writeFile(`${__dirname}/../localStorage/cred.json`, JSON.stringify(data, null, 2), err => {
                if (err) {
                    console.log('Error removing data', err.message)
                } else {
                    console.log(`Removed the data`)
                }
            })
            over()
        } else {
            over()
        }
    }
    else {
        console.log("Data not found, Hence not removed!");
        over();
    }
}

module.exports = remove;