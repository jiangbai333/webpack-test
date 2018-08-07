const entrys = require("./config/webpack.entry.js");
const loaders =require("./config/webpack.loader.js");
const output = require("./config/webpack.output.js");
const plugin = require("./config/webpack.plugin.js");

module.exports = {

    mode: 'development',

    entry: entrys, 

    output: output,

    module: loaders,

    plugins: plugin,

    devtool: 'eval-source-map',
    
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
}
