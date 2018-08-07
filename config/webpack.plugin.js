const path = require('path');
const fs = require('fs');

const __ROOT_PATH__ = path.resolve(__dirname, "../");
const __SOURCE_PATH__ = path.resolve(__ROOT_PATH__, "source");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
       
const HtmlWebpackPluginConfigs = [{
    title: 'hello world app',
    template: __ROOT_PATH__ + '/source/index/template/index.html',
    filename: "index/index.html",
    chunks: ['index'],
    hash: true
}, {
    template: __ROOT_PATH__ + '/source/common/template/index.html',
    filename: "common/index.html",
    chunks: ['common']
}];

module.exports = [
    new VueLoaderPlugin(),
    new ExtractTextPlugin("[name]/[chunkhash:8].css"),
].concat(HtmlWebpackPluginConfigs.map(( v ) => {
   return new HtmlWebpackPlugin(v); 
}));
