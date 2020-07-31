const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/js/controller.js',
    
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "js/app.js"
    },
    
    devServer: {
        contentBase: 'dist'
        //contentBase and output path me jo location h wo hamesha same hoga
    },

    //plugin for copying hmtl file into dist and auto inject script tag
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}