const ExtractTextPlugin = require("extract-text-webpack-plugin")

const __VUE_REG__ = /\.vue$/;
const __CSS_REG__ = /\.s?css$/;
const __IMG_REG__ = /\.(jpe?g|png|gif|ico)$/;
const __RES_REG__ = /\.((ttf|eot|woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|woff2?|svg)$/;

module.exports = {
    rules: [{
        test: __VUE_REG__,
        loader: 'vue-loader',
    }, {
        test: __CSS_REG__,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
        })
    }, {
        test: __IMG_REG__,
        loader: 'url-loader?limit=10240'
    }, {
        test: __RES_REG__,
        /** ../解决字体文件目录不正确的问题 */
        loader: 'url-loader?limit=10000&name=../fonts/[hash:8].[ext]'
    }]
};
