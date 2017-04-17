'use strict';

const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require("path");

var config = {
    entry: {
	main: "./example/example.js"
    },
    output: {
	path: path.resolve(__dirname, "build"),
	filename: "example.js"
    },
    module: {
	rules: [
	    {
		test: /\.(js|jsx)$/, use: "babel-loader"
	    }
	]
    },
    plugins: [
	new ManifestPlugin()
    ]
};

module.exports = config;
