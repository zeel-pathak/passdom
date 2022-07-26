const process = require("process");
const data = require("../localStorage/cred.json");
const {input, over} = require("../util/input.js");
const fs = require("fs");
const { Console } = require("console");

const add = async () => {

    if(Object.keys(data).includes(process.argv[3].toLowerCase())){

        console.log(`Credentials for ${process.argc[3]} already exists!  Procedding further will overwrite the existing credentials.
ctrl + c to exit.`)
        const username = await input("What is the username?")
        const password = await input("What is the password?")

        over()  
        
        data[process.argv[3].toLowerCase()] = {
            username,
            password
        };
 
        fs.writeFile(`${__dirname}/../localStorage/cred.json`, JSON.stringify(data, null, 2), err => {
            if (err) {
                console.log('Error Storing Credentials', err.message)
            } else {
                console.log(`successfully added the credential
                
->  passdom ${process.argv[3]} // to retrieve the credentials of ${process.argv[3]}`)
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

         
        fs.writeFile(`${__dirname}/../localStorage/cred.json`, JSON.stringify(data, null, 2), err => {
            if (err) {
                console.log('Error Storing Credentials', err.message)
            } else {
            console.log(`successfully added the credential
                
->  passdom ${process.argv[3]} // to retrieve the credentials of ${process.argv[3]}`)
            }
        })
    }
    
}



module.exports = add;