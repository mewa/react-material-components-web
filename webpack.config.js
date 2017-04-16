'use strict';

const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require("path");
const libName = "lib";

var config = {
    target: "node",
    entry: {
	main: "./src/index.js"
    },
    output: {
	library: libName,
	libraryTarget: "umd",
	path: path.resolve(__dirname, "build"),
	filename: libName + ".js"
    },
    module: {
	rules: [
	    {
		test: /\.(js|jsx)$/, use: "babel-loader"
	    }
	]
    },
    resolve: {
	modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    plugins: [
	new ManifestPlugin()
    ]
};

module.exports = config;
