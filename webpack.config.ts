import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";

const root = (...dir: Array<string>) => path.resolve(__dirname, ...dir);

const config: webpack.Configuration = {
    mode: 'development',
    entry: root('src', 'index.ts'),
    output: {
        path: root('build'),
        filename: '[name].[fullhash].js',
        assetModuleFilename: '[name].[fullhash].[ext][query]',
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: root('public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;
