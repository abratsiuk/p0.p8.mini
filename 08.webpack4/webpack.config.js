const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
    return {
        mode: mode,
        entry: './src/index.js',
        output: { filename: 'main.js', path: path.resolve('./build') },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.js/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: { presets: ['@babel/preset-env'] },
                        },
                    ],
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
        devServer: {
            contentBase: './build',
        },
    };
};
