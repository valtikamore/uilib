const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(ts|js)x?$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
                use: []
            },
            {
                test: /\.(woof(2)?|eot|ttf|otf|svg)$/,
                type: "asset/inline",
                use: []
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html')
        })
    ]
}
