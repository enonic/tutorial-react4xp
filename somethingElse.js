// somethingElse.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

// If you're using them, keep these. Otherwise, remove.
// const R = require('ramda');
// const { setEntry, addRule, addPlugin, appendExtensions, prependExtensions } = require('./util/compose');

const env = require('./util/env'); // This file sets NODE_ENV logic
const isProd = env.prod;           // true if environment === 'production'

module.exports = {
    // 1. Webpack Mode: 'production' or 'development'
    mode: isProd ? 'production' : 'development',

    // 2. Entry Point(s)
    // Adjust the path to your main entry file(s).
    // E.g. If you have a React4XP entry at "src/main/resources/react4xp/index.jsx" or ".tsx", change accordingly.
    entry: {
        main: path.resolve(__dirname, 'src/main/resources/react4xp/entries/App.tsx'),
    },

    // 3. Output Settings
    output: {
        path: path.resolve(__dirname, 'build/resources/main/react4xp'),
        filename: '[name].js',
    },

    // 4. Source Maps in Development Only
    devtool: isProd ? false : 'source-map',

    // 5. Module Resolution
    resolve: {
        symlinks: true,
        // Include whichever file extensions your project uses
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
    },

    // 6. Optimization Settings
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        // In production, you can drop console logs if you like:
                        drop_console: false,
                    },
                },
            }),
        ],
        splitChunks: {
            minSize: 30000,
            chunks: 'all',
        },
    },

    // 7. Plugins
    plugins: [
        // Extract CSS files into separate bundles in production,
        // or bundle them inline in development (with 'style-loader' below).
        new MiniCssExtractPlugin({
            filename: isProd ? '[name].[contenthash:9].css' : '[name].css',
            chunkFilename: isProd ? '[id].[contenthash:9].css' : '[id].css',
        }),

        // If you need jQuery globally:
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],

    // 8. Loaders
    module: {
        rules: [
            // JavaScript/TypeScript + Babel
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            ['@babel/preset-env', {useBuiltIns: 'usage', corejs: 3}],
                            '@babel/preset-react',     // if you're using React
                            '@babel/preset-typescript' // if you're using TypeScript
                        ],
                    },
                },
            },
            // SASS/CSS
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // In production, extract CSS to files. In dev, inject styles with 'style-loader'.
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',

                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !isProd,
                            importLoaders: 1,
                            // If you need CSS modules, auto: true matches *.module.css or *.module.scss automatically
                            modules: {auto: true},
                            esModule: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isProd,
                            sassOptions: {
                                outputStyle: 'compressed'
                            }
                        },
                    },
                ],
            },
            // Fonts / Images
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                // In Webpack 5, "asset/resource" replaces file-loader by default
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            },
        ],
    },
};
