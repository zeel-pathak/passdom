const process = require("process");
const data = require("../localStorage/cred.json");
const { input, over } = require("../util/input.js");
const fs = require("fs");

const remove = async () => {
    if(process.argv[3] === undefined){
        console.log("One more parameter required,")
        console.log("Try passdom -r <Website name> or passdom remove <Website name> instead.")
        return over()
    }

    if (Object.keys(data).includes(process.argv[3].toLowerCase())) {

        let inputVal = await input(`Are you sure you want to remove credentials for "${process.argv[3]}"? (y/n) `)
        let val = inputVal.toLowerCase();
        if (val === "y" || val === "yes") {
            delete data[process.argv[3].toLowerCase()]
            fs.writeFile(`${__dirname}/../localStorage/cred.json`, JSON.stringify(data, null, 2), err => {
                if (err) {
                    console.log('Error removing credentials', err.message)
                } 
                console.log(`Successfully removed credentials for ${process.argv[3].toLowerCase()}`) 
            })
            over()
        } else {
            over()
        }
    }
    else {
        console.log(`Credentials for ${process.argv[3].toLowerCase()} not found, Hence not removed!`);
        over();
    }
}

module.exports = remove;