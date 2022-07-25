const data = require("../localStorage/cred.json")
const process = require('process');
const {over} = require("../util/input.js");


const find = () => {
    if(Object.keys(data).includes(process.argv[2].toLowerCase())){
        console.log(`
========================================================================
                        ${process.argv[2]} Credentials

    Username -> ${data[process.argv[2].toLowerCase()].username}
    Password -> ${data[process.argv[2].toLowerCase()].password}
     
========================================================================
`)

        over()

    }
    else {
        console.error(`
    No Credentials Found
`)
over()

    }
} 
module.exports = find;