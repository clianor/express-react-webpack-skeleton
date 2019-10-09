const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
    entry: "./src/client/index.js", // 번들링을 시작할 엔트리 포인트 지정.
    output: { // 번들링된 결과물이 나오는 위치와 결과물에 대한 설정.
        path: path.join(__dirname, outputDirectory), // 번들링 파일이 위치할 디렉토리 설정.
        filename: "bundle.js", // 번들링된 결과물의 이름을 지정.
        publicPath: "/"
    },
    module: {
        rules: [ // 각종 loader들을 등록.
            { // js 파일을 babel-loader를 통해 읽어 오겠다는 설정.
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { // css 파일을 style-loader와 css-loader로 읽어오겠다는 설정.
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: { // 개발모드일때 적용되는 설정.
        port: 3000, // 개발 포트 지정.
        open: true, // 자동으로 브라우저를 열어 표시.
        proxy: { // 개발서버에서 백엔드 api의 주소가 다를때 사용하는 옵션.
            "/api": "http://localhost:8080"
        }
    },
    plugins: [ // webpack의 추가적인 플러그인을 추가.
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: [outputDirectory]}), // build시 기존에 있던 build 폴더를 삭제하고 새로 build 하도록 설정
        new HtmlWebpackPlugin({ // html로 번들링하도록 설정.
            template: "./public/index.html"
            // favicon: "./public/favicon.ico" // 파비콘을 삽입하고 싶다면 추가.
        })
    ]
}