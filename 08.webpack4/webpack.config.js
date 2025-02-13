const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode }) => {
    return {
        mode: mode,
        entry: './src/index.js',
        output: { filename: 'main.js', path: path.resolve('./build') },
        module: {},
        plugins: [new HtmlWebpackPlugin()],
    };
};
