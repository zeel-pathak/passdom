const process = require('process');
const add = require("../libs/add.js");
const find = require("../libs/find.js");
const remove = require("../libs/remove.js");
const list = require("../libs/list.js");
const exportCredentials = require("../libs/export.js");
const importCredentials = require("../libs/import.js");


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

      case "-ls":
        list();
        break;

      case "list":
        list();
        break;

      case "export":
        exportCredentials();
        break;
        
      case "import":
        importCredentials();
        break;
      
      default:
        find();
        break;
    }

}

module.exports = runner