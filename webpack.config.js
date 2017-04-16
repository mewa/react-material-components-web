const path = require("path");
const package = require("./package.json");

module.exports = {
    entry: "./src/index.js",
    output: {
	library: package.name,
	path: path.resolve(__dirname, "build"),
	filename: "[name].[hash].bundle.js"
    },
    module: {
	rules: [
	    {
		test: /\.(js|jsx)$/, use: "babel-loader"
	    }
	]
    }
};
