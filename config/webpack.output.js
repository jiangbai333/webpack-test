const path = require('path');

const __ROOT_PATH__ = path.resolve(__dirname, "../");
const __BUILD_PATH__ = path.resolve(__ROOT_PATH__, "build");

module.exports = {
    path: __BUILD_PATH__,
    filename: '[name]/bundle.js'
};
