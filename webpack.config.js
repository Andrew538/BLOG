
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
    }
};
module.exports =  ({ develop }) => ({
    mode: develop ? 'development' : 'production',
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: './js/bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
                minify: {collapseWhitespace:false}

        }),
        new MiniCssExtractPlugin(
            {
                filename: './styles/main.css',
            
            },
            
        ),
        new CleanWebpackPlugin()
    ],
    
    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.link\.css$/i,
                use: [
                { loader: "style-loader", options: { injectType: "linkTag" } },
                { loader: "file-loader" },
                ],
            },
             {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
                }
            }
            
        ]
    },

    ...devServer(develop)
    
})