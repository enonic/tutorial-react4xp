const {CssExtractRspackPlugin, ProvidePlugin} = require('@rspack/core');
const path = require('path');

// Just export an object:
module.exports = {


    // No defineConfig wrapper here
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    entry: {
        main: path.resolve(__dirname, "src/main/resources/react4xp/entries/App.tsx")
    },
    output: {
        path: path.resolve(__dirname, "build/resources/main/react4xp"),
        filename: "[name].js"
    },

    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".scss"],
        tsConfig: './tsconfig.react4xp.json',
    },

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", {targets: "defaults"}],
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            // 1. CSS Modules
            {
                test: /\.module\.(s[ac]|c)ss$/,
                use: [
                    CssExtractRspackPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                namedExport: false
                            }
                        }
                    },
                    'sass-loader'
                ]
            },

            // 2. Global CSS
            {
                test: /\.(s[ac]|c)ss$/,
                exclude: /\.module\.(s[ac]|c)ss$/,
                use: [
                    CssExtractRspackPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext][query]"
                }
            }
        ]
    },

    plugins: [
        new CssExtractRspackPlugin({
            filename: process.env.NODE_ENV === 'production'
                      ? "[name].[contenthash].css"
                      : "[name].css",
            chunkFilename: process.env.NODE_ENV === 'production'
                           ? "[id].[contenthash].css"
                           : "[id].css"
        }),
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
