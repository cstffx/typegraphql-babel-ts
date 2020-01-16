const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: "develop",
    target: "node",
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json']
    },

    module: {
        rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin(),
    ]
};