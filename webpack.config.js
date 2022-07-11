const webpack = require("webpack");
const path = require("path");
const miniCss = require('mini-css-extract-plugin');
const production = process.env.NODE_ENV === 'production';

module.exports = {
    mode: production ? "production" : "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    devServer: {
        port: 3001,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ttf|eot|woff|woff2)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? miniCss.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !production
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !production
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new miniCss({
            filename: 'styles.css',
        }),
    ]
}
