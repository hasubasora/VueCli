var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
//提取到专用文件中
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: { //入口文件 
        app: './src/main.js'
    },
    output: { // 编译后的文件路径
        path: config.build.assetsRoot,
        filename: '[name].js', //目录文件的名字
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: { //配置模块 能编译很多种
        rules: [{
                test: /\.vue$/, //检测文件
                loader: 'vue-loader', //处理这些文件
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [ // 辅助的插件
        extractSass,
        // new ExtractTextPlugin("style.css") //提取出来的样式放在style.css文件中
    ],
    // //.vue文件的配置，以下是为了在.vue文件中使用ES6语法（必须安装babel相关的依赖包），以及把使用css或sass语法的样式提取出来，如果不需要可以忽略
    // vue: {
    //     loaders: {
    //         js: 'babel',
    //         css: ExtractTextPlugin.extract("css"),
    //         sass: ExtractTextPlugin.extract("css!sass")
    //     },
    // },

}