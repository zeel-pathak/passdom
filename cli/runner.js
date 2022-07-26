const { findSourceMap } = require('module');
const process = require('process');
const add = require("../libs/add.js");
const find = require("../libs/find.js");
const remove = require("../libs/remove.js")

const runner = () => {

    switch (process.argv[2]) {

        case "-a":
            add();
            break;

        case "add":
            add();
            break;

        case "-r":
            remove();
            break;
    
        case "remove":
            remove();
            break;            
        default: 
            find(); 
            break;
    }

}

module.exports = runner