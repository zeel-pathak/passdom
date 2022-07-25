const process = require("process");
const data = require("../localStorage/cred.json");
const {input, over} = require("../util/input.js");
const fs = require("fs");

const add = async () => {

    if(Object.keys(data).includes(process.argv[3].toLowerCase())){

        const username = await input("What is the username?")
        const password = await input("What is the password?")

        over()  
        
        data[process.argv[3].toLowerCase()] = {
            username,
            password
        };
 
        fs.writeFile(`${__dirname}/../localStorage/cred.json`, JSON.stringify(data, null, 2), err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })

    }
    else{
        
        const username = await input("What is the username?")
        const password = await input("What is the password?")

        over()  

        data[process.argv[3].toLowerCase()] = {
            username,
            password
        };
        console.log(data)
         
        fs.writeFile(`${__dirname}/../localStorage/cred.json`, JSON.stringify(data, null, 2), err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
    
}



module.exports = add;