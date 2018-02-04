const path = require('path');

module.exports = {

    // Webpack development server setup.
    devServer: {
        stats: "errors-only", 
        contentBase: path.join(__dirname, 'dist'), // educate, Where to serve the file from. absolute path is prefered.
        compress: true, //enable the gzip.
        port: 5000, // Default to 8080.
        host: process.env.host, //defaault to localhost.
        clientLogLevel: "info", // manages log level: none, error, warning, info(default).
        open:true, //open the browser
        overlay: true, // to show the compilation error in browser.
    },

    // There are different devtool options. refer: https://survivejs.com/webpack/building/source-maps/
    // cheap-module-eval-source-map - This is recommmened option for development.
    devtool: "cheap-module-eval-source-map",

    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        modules: ['./', 'node_modules', 'src'],
        extensions: ['.js']
    },
    module: {
        loaders: [{
            test: "/\.js?$/",
            exclude: [
                path.resolve(__dirname, "node_modules")
            ],
            loader: "babel-loader"
        }]
    }
};