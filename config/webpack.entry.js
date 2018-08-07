const path = require('path');
const fs = require('fs');

const __ROOT_PATH__ = path.resolve(__dirname, "../");
const __APP_PATH__ = path.resolve(__ROOT_PATH__, "app");

const files = fs.readdirSync(__APP_PATH__);

let entrys = {};

files.forEach( (v, i) => {
    
    let sourceDir = __APP_PATH__ + "/" + v;

    let temp = fs.lstatSync(sourceDir);

    if ( temp.isDirectory() === true ) {
        entrys[v] = sourceDir + '/index.js';
    }
} );

module.exports = entrys;
