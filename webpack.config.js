module.exports = {
    entry: "./src/background.js",
    output: {
        path: __dirname + "/build",
        filename: "background_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [["es2015"]]
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    watch: true
};
