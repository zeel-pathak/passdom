const process = require("process");
const data = require("../localStorage/cred.json");
const { input, over } = require("../util/input.js");
const fs = require("fs");

const remove = () => {


    if (Object.keys(data).includes(process.argv[3].toLowerCase())) {

        let result = confirm("Are you sure, you want to delete?")

        if (result) {

            delete data[process.argv[3].toLowerCase()]

            fs.writeFile(`${__dirname}/../localStorage/cred.json`, JSON.stringify(data, null, 2), err => {
                if (err) {
                    console.log('Error removing data', err.message)
                } else {
                    console.log(`Removed the data`)
                }
            })
            over()
        }
    }
    else {

        console.log("Data not found, Hence not removed!");
        over();
    }
}

module.exports = remove;
